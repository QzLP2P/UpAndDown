import React from "react";
import { observer } from "mobx-react";

import { InitProps } from "./type";
import { StyledNumberInput } from "./style";
import { useTranslation } from "react-i18next";
import { StyledRow } from "../style";

const Init: React.FC<InitProps> = ({
  player,
  maxTurn,
  setPlayer,
  setMaxTurn,
}) => {
  const { t } = useTranslation("config");

  return (
    <>
      <StyledRow>
        <StyledNumberInput
          label={t("maxPlayer.placeholder")}
          value={player}
          onChange={(e) => setPlayer(+e.target.value)}
          inputProps={{ min: 2, max: 6 }}
        />
      </StyledRow>
      <StyledRow>
        <StyledNumberInput
          label={t("maxCards.placeholder")}
          value={maxTurn}
          onChange={(e) => setMaxTurn(+e.target.value)}
          inputProps={{ min: 2 }}

        />
      </StyledRow>
    </>
  );
};

export default observer(Init);
