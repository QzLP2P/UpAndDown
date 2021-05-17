import { useCallback, useState } from "react";
import { useStore } from "store";
import { RoundStateType, UseDataProps } from "./type";

const useData = (): UseDataProps => {
  const {
    gameStateStore: { nextState, currentRound },
    playerStore: { computeRound },
  } = useStore();

  const [roundState, setRoundState] = useState<RoundStateType>("bets");

  const onNext = useCallback(() => {
    switch (roundState) {
      case "bets":
        setRoundState("count");
        break;
      case "count":
        computeRound(currentRound - 1);
        nextState();
        setRoundState("bets");
        break;
      default:
        throw new Error("Not handled");
    }
  }, [nextState, roundState, setRoundState, computeRound, currentRound]);

  return {
    onNext,
    roundState,
  };
};

export default useData;
