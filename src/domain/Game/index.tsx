import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../store";
import Config from "./Config";
import useData from "./hook";
import Round from "./Round";
import { Container } from "./style";

const Game: React.FC<{}> = () => {
  const { gameStateStore : { gameState }} = useStore();
  useData();
  return (
    <Container>
      {(gameState === "Config" || gameState === "PlayerChoices") && <Config />}
      {gameState === "Round" && <Round />}

    </Container>
  );
};

export default observer(Game);
