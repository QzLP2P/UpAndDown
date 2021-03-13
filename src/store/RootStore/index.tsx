import { makeAutoObservable } from "mobx";
import { GameStateStore } from "../GameState";
import { PlayerStore } from "../PlayerStore";

export class RootStore {
  playerStore: PlayerStore = new PlayerStore();
  gameStateStore: GameStateStore = new GameStateStore();

  /**
   *
   */
  constructor() {
    makeAutoObservable(this)
  }
}
