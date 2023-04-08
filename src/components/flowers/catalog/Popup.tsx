import CustomImage from "@/components/customComponent/CustomImage";
import { theme } from "@/config/theme";
import { Grid, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface ComponentProps {
  setPopup: Dispatch<SetStateAction<boolean>>;
}

export default function Popup({ setPopup }: ComponentProps) {
  const sizes = ["s", "m", "l", "xl"];
  const closeBtnStyle = {
    content: '""',
    display: "block",
    position: "absolute",
    width: "16px",
    height: "3px",
    backgroundColor: "#000000",
    transform: "rotate(-45deg)",
    zIndex: "10",
  };
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.7)",
        zIndex: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "860px",
          height: "650px",
          background:
            "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
          padding: "67px 50px",
          position: "relative",
        }}
      >
        <Stack
          onClick={() => setPopup(false)}
          sx={{
            position: "absolute",
            right: "-15px",
            top: "-15px",
            width: "30px",
            height: "30px",
            background: theme.palette.background.default,
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&::before": {
              ...closeBtnStyle,
            },
            "&::after": {
              ...closeBtnStyle,
              transform: "rotate(45deg)",
            },
          }}
        ></Stack>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomImage src="/images/flower1.png" sx={{}} />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.background.default,
                textTransform: "capitalize",
              }}
            >
              wedding with peony
            </Typography>
            <Stack
              sx={{
                alignItems: "center",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: theme.palette.background.default }}
              >
                Sizes:
              </Typography>
              {sizes &&
                sizes.map((e, ind) => (
                  <Typography
                    key={ind}
                    variant="h3"
                    sx={{
                      textTransform: "uppercase",
                      margin: "0 12px",
                      color: theme.palette.background.default,
                      "&:hover": {
                        color: theme.palette.text.secondary,
                      },
                    }}
                  >
                    {e}
                  </Typography>
                ))}
            </Stack>
            <Stack
              sx={{
                alignItems: "center",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <Stack
                sx={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.background.default,
                    margin: "0 3px",
                  }}
                >
                  -
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.background.default,
                    margin: "0 3px",
                  }}
                >
                  1
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.background.default,
                    margin: "0 3px",
                  }}
                >
                  +
                </Typography>
              </Stack>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.text.secondary,
                  marginLeft: "20px",
                }}
              >
                2500CZK
              </Typography>
            </Stack>
            <Typography
              variant="SmallRoboto"
              sx={{
                color: theme.palette.background.default,
                display: "block",
                marginTop: "30px",
              }}
            >
              The photo shows a bouquet in size S. You can choose the desired
              size. The bouquet may differ by 10-15%, depending on the season.
              Before shipping, our florists will send you a photo to confirm
              your order.
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
