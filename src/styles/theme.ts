import { extendTheme } from "@chakra-ui/react";
import { Buttons } from "./buttons";
const theme = extendTheme({
  colors: {
    brand: {
      1: "#4529E6",
      2: "#5126EA",
      3: "#B0A6F0",
      4: "#EDEAFD",
    },
    grey: {
      1: "#0B0D0D",
      2: "#212529",
      3: "#495057",
      4: "#868E96",
      5: "#ADB5BD",
      6: "#CED4DA",
      7: "#DEE2E6",
      8: "#E9ECEF",
      9: "#F1F3F5",
      10: "#F8F9FA",
      11: "#FDFDFD",
    },
    whiteFixed: "#FFFFFF",
    alert: {
      1: "#CD2B31",
      2: "#FDD8D8",
      3: "#FFE5E5",
    },
    success: {
      1: "#18794E",
      2: "#CCEBD7",
      3: "#DDF3E4",
    },
    random: {
      1: "#E34D8C",
      2: "#C04277",
      3: "#7D2A4D",
      4: "#7000FF",
      5: "#6200E3",
      6: "#36007D",
      7: "#349974",
      8: "#2A7D5F",
      9: "#153D2E",
      10: "#6100FF",
      11: "#5700E3",
      12: "#30007D",
    },
  },
  fonts: {
    heading: {
      1: "2.75rem",
      2: "2.25rem",
      3: "2rem",
      4: "1.75rem",
      5: "1.5rem",
      6: "1.25rem",
      7: "1rem",
    },
    body: {
      1: "1rem",
      2: "0.875rem",
    },
    buttonBigText: "1rem",
    buttonMediumText: "0.875rem",
    inputPlaceholder: "1rem",
    inputLabel: "0.875rem",
  },
  fontWeights: {
    extrabold: 800,
    bold: 700,
    semibold: 600,
    medium: 500,
  },
  components: {
    Buttons,
  }
});
export default theme;