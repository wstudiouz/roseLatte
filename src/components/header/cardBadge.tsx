import { HeaderContext } from "@/context/headerContext";
import { COLORS } from "@/ts/Consts";
import { Badge, SxProps } from "@mui/material";
import React, { Dispatch, ReactElement, SetStateAction, useContext } from "react";

type Props = {
    setDrawerOpen: Dispatch<SetStateAction<boolean>>,
    icon: ReactElement,
    badgeSx?: SxProps,
    position?: "left" | "right"
}

const CardBadge = ({ setDrawerOpen, icon, badgeSx, position }: Props): ReactElement => {
    const { cards } = useContext(HeaderContext)
    return (
        <Badge
            onClick={() => setDrawerOpen(true)}
            badgeContent={cards.length}
            max={99}
            anchorOrigin={{
                horizontal: position ?? "right",
                vertical: "top"
            }}
            color="info"
            sx={{
                "& .MuiBadge-badge": {
                    top: 10,
                    border: `2px solid ${COLORS.WHITE}`,
                },
                "& svg": {
                    width: "25px",
                    height: "30px",
                },
                display: { md: "block", xs: "none" },
                ...badgeSx
            }}
        >
            {icon}
        </Badge>
    )
}

export default CardBadge