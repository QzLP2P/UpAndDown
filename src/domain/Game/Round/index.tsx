import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyledColumnMargin } from "../../../shared/styledComponents/container";
import { Split } from "../../../shared/styledComponents/split";
import { H5, H6 } from "../../../shared/styledComponents/text";
import { useStore } from "../../../store";
import useData from "./hook";
import {
  Container,
  StyledButton,
  StyledRow,
  StyledInput,
  StyledColumn,
  ImgStyled,
} from "./style";

const Round: React.FC<{}> = () => {
  const {
    gameStateStore: { currentRound, currentCard, playerDealer },
    playerStore: { players, setBet, setRoundResult, getCurrentRound },
  } = useStore();
  const { onNext, roundState } = useData();
  const { t } = useTranslation("round");
  const currentRoundArray = currentRound - 1;
  return (
    <Container>
      <StyledColumnMargin data-cy="roundContainer">
        <H5>
          {t(`title.${roundState}`, { roundCount: currentRound, currentCard })}
        </H5>
        <H6> {t(`state.${roundState}.title`)} </H6>

        <Split />

        {players.map((p) => (
          <StyledRow key={p.id} data-cy={`playerMapContainer-${p.id}`}>
            <StyledColumn>
              <StyledRow>
                <H5>{p.name}</H5>
                {p.name === players[playerDealer - 1].name && <ImgStyled src='img/deck-dealer.png' />}
              </StyledRow>
              <H6>{t(`currentScore`, { score: p.score })}</H6>
            </StyledColumn>
            <StyledInput
              inputProps={{ min: 0, max: currentCard }}
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

            {/* {roundState !== "bets" && <span>{getCurrentRound(p, currentRound)?.success}</span>} */}
          </StyledRow>
        ))}

        <Split />

        <StyledButton onClick={onNext}>
          {t(`state.${roundState}.next`)}
        </StyledButton>
      </StyledColumnMargin>
    </Container>
  );
};

export default observer(Round);
