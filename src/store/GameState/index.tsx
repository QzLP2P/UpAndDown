import { action, makeAutoObservable, observable } from "mobx";
import { GameStateType } from "./type";

export class GameStateStore {
  @observable
  gameState: GameStateType = "Config";
  @observable
  maxCards: number = 0;
  @observable
  playerCount: number = 0;
  @observable
  maxRounds: number = 0;
  @observable
  currentRound: number = 0;
  @observable
  currentCard: number = 0;
  @observable
  playerDealer: number = 0;

  constructor() {
    makeAutoObservable(this)
  }
  
  @action
  public setConfig = (maxCards: number, playerCount: number) => {
    this.maxCards = maxCards;
    this.maxRounds = (maxCards * 2) - 1;
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
        this.currentRound = 1;
        break;
      case "Round":
        if(this.currentRound === this.maxRounds)
          this.gameState = "Result";
        else 
          this.currentRound++;
        break;
    }
    this.currentCard = this.currentRound > this.maxCards ? this.maxCards - (this.currentRound - this.maxCards) : this.currentRound;
    this.playerDealer = this.currentRound;

    while(this.playerDealer > this.playerCount)
      this.playerDealer -= this.playerCount; 

    console.log(`game state is now: ${this.gameState} - turn : ${this.currentRound} - dealer : ${this.playerDealer}` );
  };

 
}
