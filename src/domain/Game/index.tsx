import React from "react";
import Config from "./Config";
import useData from "./hook";
import { Container } from "./style";

const Game: React.FC<{}> = () => {
  useData();
  return (
    <Container>
      <span>Game</span>
      <Config />
    </Container>
  );
};

export default Game;
