import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, pureWhiteColor, secondaryTextColor } from "./theme";

const customMuiTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: primaryColor
    },

    text: {
      primary: pureWhiteColor,
      secondary: secondaryTextColor
    }
  },
});

export default customMuiTheme;