//create zIndex for each layer  (zIndex is used to determine the order of layers on the map)
import * as yup from "yup";
import translate from "./utils/translate";
import { SxProps } from "@mui/material";
import { theme } from "@/config/theme";

export const Z_INDEX = {
  topHeader: 5,
  bottomHeader: 3,
  botttomHeaderItem: 3,
  homeImage: 3,
  homeOverlay: 4,
  homeText: 5,
  mainContainer: 2,
};
export const COLORS = {
  PINK: "#EC9FB6",
  BLACK: "#000",
  WHITE: "#FFFFFF",
  WHITE_BACKGROUNDW: "#fffbf4",
  SECONDARY: "#DC9DB3",
  BG: "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
};
export type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const formValidateSchema = (lang: string) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, translate("form.namelabel", lang))
      .required(translate("form.namelabel", lang)),
    phone: yup
      .string()
      .min(3, translate("form.phonelabel", lang))
      .required(translate("form.phonelabel", lang)),
    message: yup
      .string()
      .min(3, translate("form.messagelabel", lang))
      .required(translate("form.messagelabel", lang)),
    email: yup
      .string()
      .min(3, translate("form.emaillabel", lang))
      .email(translate("form.emaillabel", lang))
      .required(translate("form.emaillabel", lang)),
  });

  return schema;
};

export const inputStyle: SxProps = {
  margin: 0,
  marginBottom: "25px",
  "& .MuiOutlinedInput-root": {
    border: `1px solid ${COLORS.PINK}`,
    color: `${COLORS.PINK} !important`,
    borderRadius: "0",
    fontWeight: "300",
    fontSize: "18px",
    lineHeight: "21px",
    padding: {
      xs: "10px 15px",
      sm: "15px 20px",
      md: "20px 25px",
      lg: "30px 45px",
    },
    "&:focus": {
      border: "0",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px",
      lineHeight: "21px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "16px",
      lineHeight: "26px",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderWidth: "0px !important",
  },
  width: "100%",
  color: `${COLORS.PINK} !important`,
  " input": {
    p: 0,
  },
};

export const DEFAULT_CURSOR_SPEED = 0.9;

export type SliderResponsive = {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll?: number;
    infinite?: boolean;
    dots?: boolean;
  };
};

export const FlexBox: SxProps = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
};
