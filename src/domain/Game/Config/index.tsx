import React from "react";
import { observer } from "mobx-react";

import useData from "./hook";
import { ConfigProps } from "./type";
import {
  Container,
  StyledRow,
  StyledInput,
  StyledButton,
  StyledTextInput,
} from "./style";
import { useStore } from "../../../store";

const Config: React.FC<ConfigProps> = ({}) => {
  const {
    gameStateStore: { gameState },
    playerStore: { players, setName },
  } = useStore();
  const { player, maxTurn, setPlayer, setMaxTurn, onNext } = useData();
  return (
    <Container>
      {gameState === "Config" ? (
        <>
          <StyledRow>
            <StyledInput
              label="Nombre de joueurs"
              value={player}
              onChange={(e) => setPlayer(+e.target.value)}
            />
          </StyledRow>
          <StyledRow>
            <StyledInput
              label="Nombre maximun de tours"
              value={maxTurn}
              onChange={(e) => {
                console.log(+e.target.value);
                setMaxTurn(+e.target.value);
              }}
            />
          </StyledRow>
        </>
      ) : (
        players.map((p) => (
          <StyledRow key={p.id}>
            <StyledTextInput
              placeholder={p.name}
              onChange={(e) => setName(p, e.target.value)}
            />
          </StyledRow>
        ))
      )}

      <StyledButton onClick={onNext}>Next</StyledButton>
    </Container>
  );
};

export default observer(Config);