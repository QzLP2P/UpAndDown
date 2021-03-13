import { action, makeAutoObservable, observable } from "mobx";
import { GameStateType } from "./type";

export class GameStateStore {
  @observable
  gameState: GameStateType = "Config";
  @observable
  maxRound: number = 0;
  @observable
  playerCount: number = 0;

  constructor() {
    makeAutoObservable(this)
  }
  
  @action
  public setConfig = (maxRound: number, playerCount: number) => {
    this.maxRound = maxRound;
    this.playerCount = playerCount;
  };

  @action
  public nextState = () => {
    switch (this.gameState) {
      case "Config":
        this.gameState = "PlayerChoices";
        break;
      case "PlayerChoices":
        this.gameState = "Round";
        break;

      case "Round":
        this.gameState = "Result";
        break;
    }
    console.log('game state is now: ', this.gameState);
  };

 
}
