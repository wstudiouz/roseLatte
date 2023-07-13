import { theme } from "@/config/theme";
import { Box } from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import Image from "next/image";

interface PrevButtonProps {
  slideToPrevItem: () => void;
}

interface NextButtonProps {
  slideToNextItem: () => void;
}

interface BorderButtonsProps {
  current: number;
  items: any[];
}

export function PrevButton({ slideToPrevItem }: PrevButtonProps) {
  return (
    <Stack
      onClick={slideToPrevItem}
      sx={{ width: "80px", marginLeft: "24px", cursor: "pointer" }}
    >
      <Box
        component="svg"
        width="81"
        height="16"
        viewBox="0 0 81 16"
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Box
          component="path"
          d="M0.292892 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM81 7L1 7V9L81 9V7Z"
          fill="white"
        />
      </Box>
    </Stack>
  );
}

export function NextButton({ slideToNextItem }: NextButtonProps) {
  return (
    <Stack
      onClick={slideToNextItem}
      sx={{
        width: "80px",
        marginRight: "24px",
        cursor: "pointer",
      }}
    >
      <Box
        component="svg"
        width="81"
        height="16"
        viewBox="0 0 81 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Box
          component="path"
          d="M80.7071 8.70711C81.0976 8.31658 81.0976 7.68342 80.7071 7.29289L74.3431 0.928932C73.9526 0.538408 73.3195 0.538408 72.9289 0.928932C72.5384 1.31946 72.5384 1.95262 72.9289 2.34315L78.5858 8L72.9289 13.6569C72.5384 14.0474 72.5384 14.6805 72.9289 15.0711C73.3195 15.4616 73.9526 15.4616 74.3431 15.0711L80.7071 8.70711ZM0 9H80V7H0V9Z"
          fill="white"
        />
      </Box>
    </Stack>
  );
}

export function BorderButtons({ current, items }: BorderButtonsProps) {
  return (
    <Stack
      sx={{
        width: "50%",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {items.map((i, ind) => (
        <Box
          component="span"
          key={`${i}-${ind}`}
          sx={{
            margin: "0 15px",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background:
              current == i.id
                ? theme.palette.text.secondary
                : theme.palette.background.default,
            "&:hover": {
              background: theme.palette.text.secondary,
            },
          }}
        ></Box>
      ))}
    </Stack>
  );
}
