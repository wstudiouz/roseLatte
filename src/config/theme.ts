import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    H4Roboto: React.CSSProperties;
    SmallRoboto: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    H4Roboto: React.CSSProperties;
    SmallRoboto: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    H4Roboto: true;
    SmallRoboto: true;
  }
}

function getTheme(): Theme {
  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  theme = createTheme(theme, {
    typography: {
      fontFamily: ["Athena", "Roboto", '"sans-serif"'].join(","),
      fontSize: "16px",
      allVariants: {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },

      h1: {
        fontFamily: "Athena",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "100px",
        lineHeight: "120px",
        [theme.breakpoints.between("md", "lg")]: {
          fontSize: "81px",
          lineHeight: "95px",
        },
        [theme.breakpoints.between("sm", "md")]: {
          fontSize: "66px",
          lineHeight: "60px",
        },
        [theme.breakpoints.between("xs", "sm")]: {
          fontSize: "40px",
          lineHeight: "42px",
        },
      },
      h2: {
        fontFamily: "Athena",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "80px",
        lineHeight: "96px",
        [theme.breakpoints.between("md", "lg")]: {
          fontSize: "71px",
          lineHeight: "75px",
        },
        [theme.breakpoints.between("sm", "md")]: {
          fontSize: "50px",
          lineHeight: "60px",
        },
        [theme.breakpoints.between("xs", "sm")]: {
          fontSize: "30px",
          lineHeight: "42px",
        },
      },
      h3: {
        fontFamily: "Athena",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "50px",
        lineHeight: "60px",
        [theme.breakpoints.between("md", "lg")]: {
          fontSize: "45px",
          lineHeight: "55px",
        },
        [theme.breakpoints.between("sm", "md")]: {
          fontSize: "40px",
          lineHeight: "50px",
        },
        [theme.breakpoints.between("xs", "sm")]: {
          fontSize: "35px",
          lineHeight: "45px",
        },
      },
      h4: {
        fontFamily: "Athena",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "25px",
        lineHeight: "30px",
        [theme.breakpoints.between("md", "lg")]: {
          fontSize: "22px",
          lineHeight: "27px",
        },
        [theme.breakpoints.between("sm", "md")]: {
          fontSize: "20px",
          lineHeight: "25px",
        },
        [theme.breakpoints.between("xs", "sm")]: {
          fontSize: "18px",
          lineHeight: "21px",
        },
      },
      H4Roboto: {
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "25px",
        lineHeight: "29px",
        [theme.breakpoints.between("md", "lg")]: {
          fontSize: "20px",
          lineHeight: "25px",
        },
        [theme.breakpoints.between("sm", "md")]: {
          fontSize: "17px",
          lineHeight: "23px",
        },
        [theme.breakpoints.between("xs", "sm")]: {
          fontSize: "13px",
          lineHeight: "18px",
        },
      },
      SmallRoboto: {
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "18px",
        lineHeight: "21px",
      },
    },
    palette: {
      background: {
        default: "#FFFFFF",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#EC9FB6",
        secondary: "#DC9DB3",
      },
    },
  });
  return theme;
}
export const theme = getTheme();
