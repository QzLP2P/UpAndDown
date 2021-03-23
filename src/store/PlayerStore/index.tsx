import { action, makeAutoObservable, observable, toJS } from "mobx";
import { uuidv4 } from "../../shared/helpers";

import { PlayerType, RoundType } from "./type";

export class PlayerStore {
  @observable
  players: PlayerType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Create player and all rounds for the party
   * @param playerCount number of player
   * @param maxCards maxCard in a row
   */
  @action
  public createPlayer = (playerCount: number, maxCards: number) => {
    for (let i = 0; i < playerCount; i++) {
      const p: PlayerType = {
        name: `Nom ${i + 1}`,
        id: uuidv4(),
        score: 0,
        rounds: Array.from(Array(2 * maxCards - 1).keys()).map<RoundType>(
          (x) => ({ bet: 0, roundWon: 0, score: 0, success: false })
        ),
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
    this.getCurrentRound(player, round).bet = bet;
  };

  @action
  public setRoundResult = (
    player: PlayerType,
    round: number,
    roundWon: number
  ): void => {
    this.getCurrentRound(player, round).roundWon = roundWon;
  };

  @action
  public getCurrentRound = (
    player: PlayerType,
    round: number
  ): RoundType => {
    return player.rounds[round];
  };

  @action computeRound = (round: number): void => {
    this.players.forEach((p) => {
      const currentRound = this.getCurrentRound(p, round);

      if (!currentRound) throw new Error("pas de round..");

      const isGoodRound = currentRound.roundWon === currentRound.bet;
      const potentialScore =
        isGoodRound && currentRound.roundWon === 0
          ? 10
          : 10 * currentRound.roundWon + currentRound.roundWon;
      currentRound.score = isGoodRound ? potentialScore : currentRound.roundWon;
      currentRound.success = isGoodRound;
      p.score += currentRound.score || 0;
    });
  };
}
