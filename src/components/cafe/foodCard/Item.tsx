import { theme } from "@/config/theme";
import { COLORS } from "@/ts/Consts";
import { List, ListItem, Stack, SxProps, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface ComponentProps {
  title: string;
  desc: string[];
  sum: string;
  sx?: SxProps;
  num: number;
  setImg: Dispatch<SetStateAction<number>>;
}

export default function Item({
  title,
  desc,
  sum,
  sx,
  num,
  setImg,
}: ComponentProps) {
  return (
    <Stack
      onMouseEnter={() => setImg(num)}
      component={motion.div}
      whileHover={{ x: 10, transition: { duration: 0.5 } }}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        "&:hover": {
          opacity: 0.8,
          filter: "blur(0.2px)",
        },
        transition: "opacity 0.5s ease",
        cursor: "pointer",
        marginTop: "15px",
        ...sx,
      }}
    >
      <Stack>
        <Typography
          variant="h4"
          sx={{
            color: COLORS.WHITE,
            textTransform: "capitalize",
          }}
        >
          {title}
        </Typography>

        <Stack>
          {desc.map((e, i) => (
            <Typography
              key={i}
              variant="SmallRoboto"
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                fontFamily: "'Roboto'",
                "&:before": {
                  content: "''",
                  display: "block",
                  width: "4px",
                  height: "4px",
                  background: theme.palette.text.secondary,
                  borderRadius: "50%",
                  marginRight: "10px",
                },
              }}
            >
              {e}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.background.default,
          textTransform: "capitalize",
        }}
      >
        {sum}
      </Typography>
    </Stack>
  );
}
