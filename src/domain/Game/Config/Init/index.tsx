import React from "react";
import { observer } from "mobx-react";

import { InitProps } from "./type";
import { StyledInput } from "./style";
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
        <StyledInput
          label={t("maxPlayer.placeholder")}
          value={player}
          onChange={(e) => setPlayer(+e.target.value)}
        />
      </StyledRow>
      <StyledRow>
        <StyledInput
          label={t("maxCards.placeholder")}
          value={maxTurn}
          onChange={(e) => setMaxTurn(+e.target.value)}
        />
      </StyledRow>
    </>
  );
};

export default observer(Init);
