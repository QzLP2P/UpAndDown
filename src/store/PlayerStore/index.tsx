import { action, makeAutoObservable, observable } from "mobx";

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
        name: "Nom",
      };
      this.players.push(p);
    }
  };
}
