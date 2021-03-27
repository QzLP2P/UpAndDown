import React from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";


import { useStore } from "../../../store";
import Init from "./Init";
import Player from "./Player";

import useData from "./hook";
import { ConfigProps } from "./type";
import {
  Container,
  StyledButton,
} from "./style";

const Config: React.FC<ConfigProps> = ({}) => {
  const {
    gameStateStore: { gameState },
    playerStore: { players },
  } = useStore();
  const { player, maxTurn, setPlayer, setMaxTurn, onNext } = useData();
  const { t } = useTranslation("config");
  return (
    <Container>
      {gameState === "Config" ? (
        <Init player={player} maxTurn={maxTurn} setPlayer={setPlayer} setMaxTurn={setMaxTurn} />
      ) : (
        players.map((p) => (
          <Player p={p}/>
        ))
      )}

      <StyledButton onClick={onNext}>Next</StyledButton>
    </Container>
  );
};

export default observer(Config);
