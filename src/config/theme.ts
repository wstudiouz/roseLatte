import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heroText1: React.CSSProperties;
    heroText2: React.CSSProperties;
    product: React.CSSProperties;
    buttonText: React.CSSProperties;
    paragraph: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heroText1?: React.CSSProperties;
    heroText2?: React.CSSProperties;
    product?: React.CSSProperties;
    buttonText?: React.CSSProperties;
    paragraph: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heroText1: true;
    heroText2: true;
    product: true;
    buttonText: true;
    paragraph: true;
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
      fontFamily: ['"Playfair Display"', '"Roboto"', '"sans-serif"'].join(","),
      fontSize: "16px",
      allVariants: {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      h1: {
        lineHeight: "50px",
        fontSize: "40px",
        fontWeight: "300",
        fontFamily: "ivyjournal",
        [theme.breakpoints.between("xs", "md")]: {
          fontSize: "30px",
          lineHeight: "34px",
          fontWeight: "300",
        },
      },
      h2: {
        lineHeight: "37px",
        fontSize: "30px",
        fontWeight: "700",
        fontFamily: "Playfair Display",
        [theme.breakpoints.between("xs", "md")]: {
          fontSize: "24px",
          lineHeight: "30px",
          fontWeight: "300",
        },
      },
      h3: {
        fontWeight: "700",
        fontSize: "40px",
        lineHeight: "49px",
        fontFamily: "Playfair Display",
        [theme.breakpoints.between("xs", "md")]: {
          fontSize: "16px",
          lineHeight: "27px",
          fontWeight: "500",
        },
      },
      h4: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "27px",
        fontFamily: "poppins",
      },
      buttonText: {
        fontFamily: "ivyjournal",
        fontWeight: "300",
        fontSize: "36px",
        lineHeight: "49px",
      },
      heroText1: {
        fontFamily: "Playfair Display",
        fontWeight: "700",
        fontSize: "100px",
        lineHeight: "123px",
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
      heroText2: {
        fontFamily: "Playfair Display",
        fontWeight: "700",
        fontSize: "65px",
        lineHeight: "80px",
      },
      product: {
        fontFamily: "Playfair Display",
        fontWeight: "700",
        fontSize: "15px",
        lineHeight: "18px",
        textTransform: "uppercase",
      },
      paragraph: {
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "18px",
      },
    },
    palette: {
      primary: {
        main: "#3D1212", //red
        contrastText: "#DCD4D4", //
      },
      secondary: {
        main: "#CCA041", //gold
      },
      background: {
        default: "#FFFFFF",
        paper: "#000000",
      },
      text: {
        primary: "#3D1212", //red
        secondary: "#CCA041", //gold
      },
    },
  });
  return theme;
}
export const theme = getTheme();
