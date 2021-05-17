import { observer } from "mobx-react";
import React from "react";
import { useStore } from "store";
import Config from "./Config";
import useData from "./hook";
import Result from "./Result";
import Round from "./Round";
import { Container } from "./style";

const Game: React.FC<{}> = () => {
  const {
    gameStateStore: { gameState },
  } = useStore();
  useData();
  return (
    <Container data-cy='gameContainer'>
      {(gameState === "Config" || gameState === "PlayerChoices") && <Config />}
      {gameState === "Round" && <Round />}
      {gameState === "Result" && <Result />}
    </Container>
  );
};

export default observer(Game);
