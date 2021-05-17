import { PlayerType } from "store/PlayerStore/type";
import { RoundStateType } from "../type";

export type PlayerRoundProps = {
  p : PlayerType;
  roundState: RoundStateType;
}

export type UseDataProps = {
  currentRoundArray: number;
  StateBets: false | JSX.Element;
};