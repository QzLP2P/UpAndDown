import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { TABLET_BREAKPOINT } from "../../../shared/constants";
import { H2, H3 } from "../../../shared/styledComponents/text";
import { Container, LogoContainer, StyledContainer } from "./style";

const Header: React.FC<WithTranslation> = ({ t }) => {
  const isMobile = useMediaQuery(`(max-width: ${TABLET_BREAKPOINT}px)`);

  return (
    <Container data-cy="headerContainer">
      <StyledContainer>
        <LogoContainer data-cy="mainLogo" />
        {!isMobile ? (
          <H2 data-cy="mainTitle">{t("title")}</H2>
        ) : (
          <H3 data-cy="mainTitle">{t("title")}</H3>
        )}
      </StyledContainer>
    </Container>
  );
};

export default withTranslation("common")(Header);
