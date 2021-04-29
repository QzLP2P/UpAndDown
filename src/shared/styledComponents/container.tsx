import styled, { css } from "styled-components";

export const StyledContainerBasic = styled.div`
  flex: initial;
  display: flex;
  width: inherit;
  flex: 1;
`;

export const StyledContainerCenter = styled(StyledContainerBasic)`
  justify-content: center;
  align-items: center;
`;

export const StyledContainerRow = styled(StyledContainerBasic)`
  flex-direction: row;
  align-items: center;
`;

export const StyledContainerColumn = styled(StyledContainerBasic)`
  flex-direction: column;
`;

export const StyledCenterContainerColumn = styled(StyledContainerColumn)`
  align-items: center;
`;

const marginCss = css`
  margin-left: 30px;
  margin-right: 30px;
  width: calc(100% - 60px);
`;

export const StyledColumnMargin = styled(StyledCenterContainerColumn)`
  ${marginCss}
`;

export const StyledRowMargin = styled(StyledContainerRow)`
  justify-content: center;
  ${marginCss}
`;

export const StyledRowSpaceBetweenMargin = styled(StyledRowMargin)`
  justify-content: space-between;
`;

export const PageWrapper = styled(StyledContainerBasic)`
  width: 320px;
  margin: 0;
  @media (${(p) => p.theme.responsive.tablet}) {
    width: 640px;
    margin: auto;
  }
  @media (${(p) => p.theme.responsive.desktop}) {
    width: 1080px;
    margin: auto;
  }
`;
