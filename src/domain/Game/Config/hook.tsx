import { useCallback, useState } from "react";
import { useStore } from "../../../store";
import { UseDataProps } from "./type";

const useData = (): UseDataProps => {
  const { gameStateStore, playerStore } = useStore();
  const [player, setPlayer] = useState<number>(0);
  const [maxTurn, setMaxTurn] = useState<number>(0);

  const onNext = useCallback(() => {
    debugger;
    gameStateStore.setConfig(maxTurn, player);
    gameStateStore.nextState();
  }, [gameStateStore, playerStore, maxTurn, player]);

  return {
    player,
    maxTurn,
    setPlayer,
    setMaxTurn,
    onNext,
  };
};

export default useData;
