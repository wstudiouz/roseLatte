import { theme } from "@/config/theme";
import { COLORS } from "@/ts/Consts";
import { SxProps, TextField, TextFieldProps } from "@mui/material";
import React, { FC, useEffect } from "react";

type Props = TextFieldProps & {
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  value?: string | undefined;
  valueError?: string | undefined;
  required?: boolean;
  label?: string;
  styleForInput?: SxProps;
  styleForContainer?: SxProps;
  maxLength?: number;
  forFooterForm?: boolean;
};

const CustomInput: FC<Props> = ({
  setValue,
  value,
  valueError,
  styleForInput,
  styleForContainer,
  label,
  required,
  maxLength,
  forFooterForm,
  ...tProps
}) => {
  const [error, setError] = React.useState<string | undefined>(valueError);
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (maxLength === undefined) return setValue(e.target.value);
    if (e.target.value.length < maxLength) {
      setError(undefined);
      setValue(e.target.value);
    } else {
      setError(`Max length is ${maxLength} characters`);
    }
  };
  useEffect(() => {
    setError(valueError);
  }, [valueError]);
  return (
    <TextField
      onChange={(e) => handleChanges(e)}
      variant="outlined"
      value={value}
      error={error !== undefined}
      helperText={error}
      inputProps={{ maxLength: maxLength }}
      placeholder={forFooterForm ? label : undefined}
      sx={{
        "& .MuiOutlinedInput-root": {
          border: error !== undefined ? "0px" : `1px solid ${COLORS.PINK}`,
          color: `${COLORS.PINK} !important`,
          borderRadius: "0",
          fontWeight: "300",
          fontSize: "18px",
          lineHeight: "21px",
          padding: "30px",
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
        marginTop: { xs: "16px", md: "0" },
        width: "100%",
        color: `${COLORS.PINK} !important"`,
        ...styleForInput,
      }}
      {...tProps}
    />
  );
};

export default CustomInput;
