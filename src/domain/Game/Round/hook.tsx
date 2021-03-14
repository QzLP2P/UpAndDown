import { useCallback, useState } from "react";
import { useStore } from "../../../store";
import { RoundStateType, UseDataProps } from "./type";

const useData = (): UseDataProps => {
  const {
    gameStateStore: { setConfig, nextState, gameState, currentRound },
    playerStore: { computeRound, checkBets },
  } = useStore();

  const [roundState, setRoundState] = useState<RoundStateType>("bets");

  const onNext = useCallback(() => {
    switch (roundState) {
      case "bets":
        checkBets(currentRound);
        setRoundState("count");
        break;
      case "count":
        computeRound();
        nextState();
        setRoundState("bets");
        break;
      default:
        throw new Error("Not handled");
    }
  }, [nextState, roundState, setRoundState, computeRound, currentRound, checkBets]);

  return {
    onNext,
    roundState,
  };
};

export default useData;
