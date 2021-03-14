export type RoundType = {
  bet: number;
  roundWon: number;
  score: number;
  success: boolean;
}

export type PlayerType = {
  name: string;
  id: string;
  rounds: RoundType[];
  score: number;
}
