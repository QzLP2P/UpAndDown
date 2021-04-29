import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";

import { useStore } from "../../../store";

import { ResultProps } from "./type";
import {
  Container,
  Title,
  PlayerContainer,
  StyledRow,
  StyledScoreContainer,
  StyledScoreSpan,
  StyledSpan,
  StyledResultContainer,
} from "./style";

const Result: React.FC<ResultProps> = () => {
  const {
    playerStore: {
      getOrderedPlayers,
      maxPlayerScore,
      maxSuccessedRound,
      getRatio,
    },
  } = useStore();
  const { t } = useTranslation("result");

  return (
    <Container data-cy="gameResultContainer">
      <Title>{t(`title`)}</Title>
      <StyledResultContainer data-cy="gameResultMarginContainer">
        {getOrderedPlayers().map((p, index) => (
          <StyledRow key={p.id} data-cy="gameResultRowPlayerContainer">
            <StyledScoreContainer>
              <StyledScoreSpan>{`${index + 1}. ${p.name}`}</StyledScoreSpan>
            </StyledScoreContainer>
            <PlayerContainer>
              <StyledSpan>
                {t("player.title", {
                  score: p.score,
                  bestScore: maxPlayerScore(p),
                })}
              </StyledSpan>
              <StyledSpan>
                {t("player.average", {
                  success: maxSuccessedRound(p),
                  total: p.rounds.length,
                })}
              </StyledSpan>
              <StyledSpan>{t(`player.sentences.${getRatio(p)}`)}</StyledSpan>
            </PlayerContainer>
          </StyledRow>
        ))}
      </StyledResultContainer>
    </Container>
  );
};

export default observer(Result);
