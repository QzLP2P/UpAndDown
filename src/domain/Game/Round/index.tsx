import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyledColumnMargin } from "../../../shared/styledComponents/container";
import { H5, H6 } from "../../../shared/styledComponents/text";
import { useStore } from "../../../store";
import useData from "./hook";
import {
  Container,
  StyledButton,
  StyledRow,
  StyledInput,
  StyledColumn,
} from "./style";

const Round: React.FC<{}> = () => {
  const {
    gameStateStore: { currentRound },
    playerStore: { players, setBet, setRoundResult, getCurrentRound },
  } = useStore();
  const { onNext, roundState } = useData();
  const { t } = useTranslation("round");
  const currentRoundArray = currentRound - 1;
  return (
    <Container>
      <StyledColumnMargin data-cy="roundContainer">
        <H5>{t(`title`, { roundCount: currentRound })}</H5>
        <H6> {t(`state.${roundState}.title`)} </H6>

        {players.map((p) => (
          <StyledRow key={p.id}>
            <StyledColumn>
              <H5>{p.name}</H5>
              <H6>{t(`currentScore`, { score: p.score })}</H6>
            </StyledColumn>
            <StyledInput
              label={t(`state.${roundState}.input`)}
              value={
                roundState === "bets"
                  ? getCurrentRound(p, currentRoundArray)?.bet || 0
                  : getCurrentRound(p, currentRoundArray)?.roundWon || 0
              }
              onChange={(e) => {
                roundState === "bets"
                  ? setBet(p, currentRoundArray, +e.target.value)
                  : setRoundResult(p, currentRoundArray, +e.target.value);
              }}
            />
          </StyledRow>
        ))}
        <StyledButton onClick={onNext}>
          {t(`state.${roundState}.next`)}
        </StyledButton>
      </StyledColumnMargin>
    </Container>
  );
};

export default observer(Round);
