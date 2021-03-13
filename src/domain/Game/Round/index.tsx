import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../../store";
import { Container } from "./style";

const Round: React.FC<{}> = () => {
  const {
    gameStateStore: { gameState },
    playerStore: { players },
  } = useStore();
  return (
    <Container>
      <span>Start round</span>
      {players.map((p) => (
        <div key={p.id}>
          <span>{p.name}</span>
        </div>
      ))}
    </Container>
  );
};

export default observer(Round);
