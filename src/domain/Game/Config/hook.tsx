import { useCallback, useState } from "react";
import { useStore } from "../../../store";
import { UseDataProps } from "./type";

const useData = (): UseDataProps => {
  const { gameStateStore: { setConfig, nextState, gameState }, playerStore } = useStore();
  const [player, setPlayer] = useState<number>(2);
  const [maxTurn, setMaxTurn] = useState<number>(2);

  const onNext = useCallback(() => {
    if(gameState === 'Config') {
      setConfig(maxTurn, player);
      playerStore.createPlayer(player, maxTurn);
      nextState();
    } else {
      nextState();
    }
    
  }, [gameState, setConfig, nextState,  playerStore, maxTurn, player]);

  return {
    player,
    maxTurn,
    setPlayer,
    setMaxTurn,
    onNext,
  };
};

export default useData;
