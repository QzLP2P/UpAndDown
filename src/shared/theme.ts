import { TABLET_BREAKPOINT, DESKTOP_BREAKPOINT, TABLET_BIG_BREAKPOINT } from './constants';

export const mainBlackColor = '#161C22';
export const disabledGreyColor = '#929497';
export const lightGrayColor = '#E4E9E3';
export const bluePanelColor = '#0081d5';
export const lightBlueColor = '#B8DBF6';
export const mainGrayColor = '#5C6064';
export const pureWhiteColor = '#FFFFFF';
export const pureBlackColor = '#000';
export const borderColor = '#99AFBD';

const theme = {
  colors: {
    primary: bluePanelColor,
    border: borderColor,
    background: {
      main: '#F5F9F4',
      block1: lightGrayColor,
      block2: '#EDEFED',
      block3: '#0069AD',
      alert: '#F0E7E5',
      white: '#FFF'
    },
    text: {
      black: {
        main: mainBlackColor,
        faded: 'rgba(22, 28, 34, 0.7)',
        variant: 'rgba(22, 28, 34, 0.4)',
        overlay: 'rgba(0, 0, 0, 0.4)'
      },
      white: {
        main: pureWhiteColor,
        variant: 'rgba(255, 255, 255, 0.5)',
      },
      error: '#D04747',
      disabled: '#818587'
    },
    alert: {
      error: '#D04747',
      warn: '#FFBB37',
      success: '#6EBA32',
    },
  },
  textSizes: {
    regular: '14px',
    big: '18px'
  },
  responsive: {
    tablet: `min-width: ${TABLET_BREAKPOINT}px`,
    tabletBig: `min-width: ${TABLET_BIG_BREAKPOINT}px`,
    desktop: `min-width: ${DESKTOP_BREAKPOINT}px`,
  }
};

export type ThemeInterface = typeof theme;

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface DefaultTheme extends ThemeInterface { }
}

export default theme;