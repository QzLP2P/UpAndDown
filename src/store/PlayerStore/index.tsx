import { action, makeAutoObservable, observable } from "mobx";
import { uuidv4 } from "../../shared/helpers";

import { PlayerType } from "./type";

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
        rounds: []
      };
      this.players.push(p);
    }
  };

  public setName = (player: PlayerType, name: string): void => {
    console.log('name changed : ', name);
    player.name = name;
  }
}
