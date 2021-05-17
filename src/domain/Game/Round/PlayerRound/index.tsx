import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "store";
import { H5, H6 } from "shared/styledComponents/text";

import useData from "./hook";
import { PlayerRoundProps } from "./type";
import { StyledRow, StyledInput, StyledColumn, ImgStyled } from "./style";

const PlayerRound: React.FC<PlayerRoundProps> = ({ p, roundState }) => {
  const { t } = useTranslation("round");
  const { currentRoundArray, StateBets } = useData(p, roundState);
  const {
    gameStateStore: { currentRound, currentCard, playerDealer },
    playerStore: { players, setBet, setRoundResult, getCurrentRound },
  } = useStore();

  return (
    <StyledRow key={p.id} data-cy={`playerMapContainer-${p.id}`}>
      <StyledColumn data-cy={`playerMapContainerName-${p.id}`}>
        <StyledRow>
          <H5>{p.name}</H5>
          {p.name === players[playerDealer - 1].name && (
            <ImgStyled src="img/deck-dealer.png" />
          )}
        </StyledRow>
        <H6>{t(`currentScore`, { score: p.score })}</H6>
      </StyledColumn>
      <StyledInput
        data-cy={`playerMapContainerValue-${p.id}`}
        inputProps={{ min: 0, max: currentCard }}
        label={t(`state.${roundState}.input`)}
        placeholder={"test abc"}
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

      {StateBets}
    </StyledRow>
  );
};

export default observer(PlayerRound);
