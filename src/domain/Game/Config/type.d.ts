import { BaseProps } from "./../type";
export type ConfigProps = {};

export type UseDataProps = {
  player: number;
  maxTurn: number;
  setPlayer: React.Dispatch<React.SetStateAction<number>>;
  setMaxTurn: React.Dispatch<React.SetStateAction<number>>;
  onNext: () => void;
};
