import React from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

import { useStore } from "../../../../store";
import { PlayerProps } from "./type";
import { StyledRow } from "../style";
import { StyledTextInput } from "./style";

const Player: React.FC<PlayerProps> = ({ p }) => {
  const {
    playerStore: { setName },
  } = useStore();
  const { t } = useTranslation("config");
  return (
    <StyledRow key={p.id}>
      <StyledTextInput
        placeholder={p.name}
        onChange={(e) => setName(p, e.target.value)}
      />
    </StyledRow>
  );
};

export default observer(Player);
