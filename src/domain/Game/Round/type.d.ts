import { BaseProps } from "./../type";
export type RoundProps = {};

export type RoundStateType = "bets" | "count";

export type UseDataProps = {
  onNext: () => void;
  roundState: RoundStateType;
};
