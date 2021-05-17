import React from "react";
import { useStore } from "store";
import { PlayerType } from "store/PlayerStore/type";
import { RoundStateType } from "../type";
import { UseDataProps } from "./type";
import { CheckContainer } from "./style";

const useData = (p: PlayerType, roundState: RoundStateType): UseDataProps => {
  const {
    gameStateStore: { currentRound },
    playerStore: { getCurrentRound },
  } = useStore();
  const currentRoundArray = currentRound - 1;

  const isGood =
    getCurrentRound(p, currentRoundArray)?.bet ===
    getCurrentRound(p, currentRoundArray)?.roundWon;

  console.log('state : ' + roundState);
  const StateBets =
    roundState === "count" && (
      isGood ? (<CheckContainer>✔️</CheckContainer>) : (<CheckContainer>❌</CheckContainer>)
    );


  return {
    currentRoundArray,
    StateBets,
  };
};

export default useData;
