import React from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

import { useStore } from "store";
import Init from "./Init";
import Player from "./Player";

import { Split } from "shared/styledComponents/split";
import { H5, H6 } from "shared/styledComponents/text";

import useData from "./hook";
import { ConfigProps } from "./type";
import { Container, DisclaimerContainer, StyledButton, GameContainer, MarginContainer } from "./style";


const Config: React.FC<ConfigProps> = () => {
  const {
    gameStateStore: { gameState },
    playerStore: { players },
  } = useStore();
  const { player, maxTurn, setPlayer, setMaxTurn, onNext } = useData();
  const { t } = useTranslation("config");
  return (
    <Container data-cy="configContainer">
      <MarginContainer data-cy="configMarginContainer">
        <DisclaimerContainer data-cy='disclaimerContainer'>
          <H5> {t("mainTitle")}</H5>
          <H6> {t(`title.${gameState}`)}</H6>

          <Split />
        </DisclaimerContainer>

        <GameContainer data-cy='gameContainer' player={player}>
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

          <Split />

          <StyledButton onClick={onNext}>
            {t(`nextButton.${gameState}`)}
          </StyledButton>
        </GameContainer>
      </MarginContainer>
    </Container>
  );
};

export default observer(Config);
