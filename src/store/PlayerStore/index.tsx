import { action, makeAutoObservable, observable, toJS } from "mobx";
import { uuidv4 } from "../../shared/helpers";

import { PlayerType, RoundType } from "./type";

export class PlayerStore {
  @observable
  players: PlayerType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public createPlayer = (playerCount: number) => {
    for (let i = 0; i < playerCount; i++) {
      const p: PlayerType = {
        name: `Nom ${i + 1}`,
        id: uuidv4(),
        score: 0,
        rounds: [],
      };
      this.players.push(p);
    }
  };

  @action
  public setName = (player: PlayerType, name: string): void => {
    player.name = name;
  };

  @action
  public setBet = (player: PlayerType, round: number, bet: number): void => {
    const targetPlayer = this.players.find((p) => p.id === player.id);
    if (!targetPlayer) return;

    if (targetPlayer.rounds.length > round) {
      targetPlayer.rounds[round].bet = bet;
    } else {
      targetPlayer.rounds.push({
        bet,
        roundWon: 0,
        score: 0,
        success: false,
      });
    }
  };

  @action
  public setRoundResult = (
    player: PlayerType,
    round: number,
    roundWon: number
  ): void => {
    const targetPlayer = this.players.find((p) => p.id === player.id);

    if (!targetPlayer) return;
    const lastRound = this.getCurrentRound(targetPlayer, round);
    if (lastRound) {
      lastRound.roundWon = roundWon;
    }
  };

  @action
  public getCurrentRound = (
    player: PlayerType,
    round: number
  ): RoundType | null => {
    if (player.rounds.length > 0 && player.rounds.length >= round) {
      const lastRound = player.rounds[round];
      return lastRound;
    }
    return null;
  };

  @action
  public getLastRound = (player: PlayerType): RoundType | null => {
    if (player.rounds.length > 0) {
      const lastRound = player.rounds[player.rounds.length - 1];
      return lastRound;
    }
    return null;
  };

  @action checkBets = (round: number): void => {
    this.players.forEach((p) => {
      if (p.rounds.length < round) {
        this.setBet(p, round, 0);
      }
    });
  };

  @action computeRound = (): void => {
    this.players.forEach((p) => {
      const currentRound = this.getLastRound(p);

      if (!currentRound) throw new Error("pas de round..");

      const success = currentRound.roundWon === currentRound.bet;
      const score =
        success && currentRound.roundWon === 0
          ? 10
          : 10 * currentRound.roundWon + currentRound.roundWon;
      currentRound.score = success ? score : currentRound.roundWon;
      currentRound.success = success;
      p.score += currentRound.score || 0;
    });
  };
}
