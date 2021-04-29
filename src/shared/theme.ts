import {
  TABLET_BREAKPOINT,
  DESKTOP_BREAKPOINT,
  TABLET_BIG_BREAKPOINT,
} from "./constants";

export const mainBlackColor = "#161C22";
export const disabledGreyColor = "#929497";
export const lightGrayColor = "#E4E9E3";
export const bluePanelColor = "#0081d5";
export const lightBlueColor = "#B8DBF6";
export const mainGrayColor = "#5C6064";
export const pureBlackColor = "#000";
export const borderColor = "#99AFBD";

export const primaryColor = "#ea5b0f";
export const pureWhiteColor = "#FFFFFF";
export const secondaryTextColor = "#d1ddef";

const theme = {
  colors: {
    primary: bluePanelColor,
    border: borderColor,
    background: {
      main: "#5C6064",
      block1: lightGrayColor,
      block2: "#EDEFED",
      block3: "#0069AD",
      alert: "#F0E7E5",
      white: "#FFF",
    },
  },
  textSizes: {
    regular: "14px",
    big: "18px",
  },
  responsive: {
    tablet: `min-width: ${TABLET_BREAKPOINT}px`,
    tabletBig: `min-width: ${TABLET_BIG_BREAKPOINT}px`,
    desktop: `min-width: ${DESKTOP_BREAKPOINT}px`,
  },
};

export type ThemeInterface = typeof theme;

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface DefaultTheme extends ThemeInterface {}
}

export default theme;
