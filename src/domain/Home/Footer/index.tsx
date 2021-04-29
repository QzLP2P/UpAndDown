import React, { useCallback } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import {
  StyledRowSpaceBetweenMargin,
} from "../../../shared/styledComponents/container";
import { Container, StyledText, ImgStyled } from "./style";

const Footer: React.FC<WithTranslation> = ({ t }) => {
  const openLink = useCallback((link: string): void => {
    window.open(link, "_blank");
  }, []);
  //
  return (
    <Container data-cy="footerContainer">
        <StyledRowSpaceBetweenMargin>
          <StyledText onClick={() => openLink(t("ruleLink"))}>
            {t("footer.rule")}
          </StyledText>
          <StyledText onClick={() => openLink(t("linkedIn"))}>
            {t("footer.about")}
          </StyledText>
          <ImgStyled
            src="https://media.giphy.com/media/RETzc1mj7HpZPuNf3e/giphy.gif"
            onClick={() => openLink(t("buyMeACoffee"))}
          />
        </StyledRowSpaceBetweenMargin>
    </Container>
  );
};

export default withTranslation("common")(Footer);
