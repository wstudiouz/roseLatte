import { HeaderContext } from "@/context/headerContext";
import React, { ReactElement, useContext, useState } from "react";
import CustomSelect from "./select";
import { Box } from "@mui/material";

const LangSelect = (): ReactElement => {
    const { setLang } = useContext(HeaderContext);

    const [options] = useState(["en", "cz"])

    const handleChangeSelect = (e: string) => {
        localStorage.setItem("lang", e);
        setLang(e);
    }

    return (
        <Box sx={{ display: { xs: "none", md: "block" } }}>
            <CustomSelect
                options={options}
                placeHolder='Lang'
                onChange={(e: any) => handleChangeSelect(e)}
            />

        </Box>
    )
}
export default LangSelect