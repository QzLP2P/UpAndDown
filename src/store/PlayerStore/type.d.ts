export type RoundType = {
  beat: number;
  done: number;
}

export type PlayerType = {
  name: string;
  id: string;
  rounds: RoundType[];
}
