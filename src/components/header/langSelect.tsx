import { HeaderContext } from "@/context/headerContext";
import { COLORS } from "@/ts/Consts";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import React, { ReactElement, useContext } from "react";

const LangSelect = (): ReactElement => {
    const { lang, setLang, openHeader } = useContext(HeaderContext)
    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedValue = event.target.value;
        localStorage.setItem("lang", selectedValue);
        setLang(selectedValue);
    };

    return (
        <Box
            component="select"
            sx={{
                textTransform: "uppercase",
                border: "none",
                outline: "none",
                background: "none",
                color: openHeader ? COLORS.BLACK : COLORS.WHITE,
                fontSize: "25px",
                display: { md: "block", xs: "none" },
            }}
            value={lang}
            onChange={handleLanguageChange}
            suppressHydrationWarning
        >
            <Box component="option" value="en" sx={{ color: "black" }}>
                En
            </Box>
            <Box component="option" value="cz" sx={{ color: "black" }}>
                Cz
            </Box>
        </Box>
    )
}
export default LangSelect