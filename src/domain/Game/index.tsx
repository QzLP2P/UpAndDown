import React from "react";
import Config from "./Config";
import { Container } from "./style";

const Game: React.FC<{}> = () => {
  return (
    <Container>
      <span>Game</span>
      <Config />
    </Container>
  );
};

export default Game;
