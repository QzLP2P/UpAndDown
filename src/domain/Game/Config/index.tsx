import React from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

import { useStore } from "../../../store";
import Init from "./Init";
import Player from "./Player";

import useData from "./hook";
import { ConfigProps } from "./type";
import { Container, StyledButton } from "./style";
import { StyledColumnMargin } from "../../../shared/styledComponents/container";

const Config: React.FC<ConfigProps> = ({}) => {
  const {
    gameStateStore: { gameState },
    playerStore: { players },
  } = useStore();
  const { player, maxTurn, setPlayer, setMaxTurn, onNext } = useData();
  const { t } = useTranslation("config");
  return (
    <Container data-cy='configContainer'>
      <StyledColumnMargin data-cy='configMarginContainer'>
        {gameState === "Config" ? (
          <Init
            player={player}
            maxTurn={maxTurn}
            setPlayer={setPlayer}
            setMaxTurn={setMaxTurn}
          />
        ) : (
          players.map((p) => <Player key={p.id} p={p} />)
        )}

        <StyledButton onClick={onNext}>
          {t(`nextButton.${gameState}`)}
        </StyledButton>
      </StyledColumnMargin>
    </Container>
  );
};

export default observer(Config);
