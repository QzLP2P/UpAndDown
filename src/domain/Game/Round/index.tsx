import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";
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
    gameStateStore: { gameState, currentRound },
    playerStore: { players, setBet, setRoundResult, getCurrentRound },
  } = useStore();
  const { onNext, roundState } = useData();
  const { t } = useTranslation("round");
  const currentRoundArray = currentRound -1;
  return (
    <Container>
      <span>{t(`title`, { roundCount: currentRound })}</span>
      <span> {t(`state.${roundState}.title`)} </span>

      {players.map((p) => (
        <StyledRow key={p.id}>
          <StyledColumn>
            <span>{p.name}</span>
            <span>{t(`currentScore`, { score: p.score })}</span>
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
    </Container>
  );
};

export default observer(Round);
