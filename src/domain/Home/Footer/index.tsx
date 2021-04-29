import { useMediaQuery } from "@material-ui/core";
import React, { useCallback } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { TABLET_BREAKPOINT } from "../../../shared/constants";
import { StyledRowSpaceBetweenMargin } from "../../../shared/styledComponents/container";
import { Container, StyledText, ImgStyled, StyledMobileText } from "./style";

const Footer: React.FC<WithTranslation> = ({ t }) => {
  const openLink = useCallback((link: string): void => {
    window.open(link, "_blank");
  }, []);

  const isMobile = useMediaQuery(`(max-width: ${TABLET_BREAKPOINT}px)`);

  //
  return (
    <Container data-cy="footerContainer">
      <StyledRowSpaceBetweenMargin>
        {isMobile ? (
          <>
            <StyledMobileText onClick={() => openLink(t("ruleLink"))}>
              {t("footer.rule")}
            </StyledMobileText>
            <StyledMobileText onClick={() => openLink(t("linkedIn"))}>
              {t("footer.about")}
            </StyledMobileText>
            <ImgStyled
              src="https://media.giphy.com/media/RETzc1mj7HpZPuNf3e/giphy.gif"
              onClick={() => openLink(t("buyMeACoffee"))}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </StyledRowSpaceBetweenMargin>
    </Container>
  );
};

export default withTranslation("common")(Footer);
