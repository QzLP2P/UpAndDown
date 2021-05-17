import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Split } from "shared/styledComponents/split";
import { H5, H6 } from "shared/styledComponents/text";
import { useStore } from "store";
import useData from "./hook";
import PlayerRound from "./PlayerRound";
import {
  Container,
  StyledButton,
  RoundContainer,
  DisclaimerContainer,
  PlayerContainer,
} from "./style";

const Round: React.FC<{}> = () => {
  const {
    gameStateStore: { currentRound, currentCard },
    playerStore: { players },
  } = useStore();
  const { onNext, roundState } = useData();
  const { t } = useTranslation("round");

  return (
    <Container>
      <RoundContainer data-cy="roundContainer">
        <DisclaimerContainer data-cy="disclaimerContainer">
          <H5>
            {t(`title.${roundState}`, {
              roundCount: currentRound,
              currentCard,
            })}
          </H5>
          <H6> {t(`state.${roundState}.title`)} </H6>

          <Split />
        </DisclaimerContainer>

        <PlayerContainer data-cy="playerContainer">
          {players.map((p) => <PlayerRound key={p.id} p={p} roundState={roundState} /> )}
          <Split />
          <StyledButton onClick={onNext}>
            {t(`state.${roundState}.next`)}
          </StyledButton>
        </PlayerContainer>
      </RoundContainer>
    </Container>
  );
};

export default observer(Round);
