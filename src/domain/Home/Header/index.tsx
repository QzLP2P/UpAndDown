import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { H2 } from "../../../shared/styledComponents/text";
import { Container, LogoContainer } from "./style";

const Header: React.FC<WithTranslation> = ({ t }) => {
  return (
    <Container data-cy='headerContainer'>
      <LogoContainer />
      <H2>{t("title")}</H2>
    </Container>
  );
};

export default withTranslation("common")(Header);
