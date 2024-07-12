import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CustomImage from "../customComponent/CustomImage";
import { motion } from "framer-motion";
import { CustomComponentsHeroComponent } from "@/ts/REST/api/generated";
import { useContext } from "react";
import { HeaderContext } from "@/context/headerContext";
import { COLORS, FlexBox } from "@/ts/Consts";

interface HeroProps {
  bgImg: string;
  title?: string;
  desc?: string;
  right?: boolean;
  data?: CustomComponentsHeroComponent;
}

export default function TopHero({ bgImg, right, data }: HeroProps) {
  const { lang } = useContext(HeaderContext);
  const text =
    data && data[`text_${lang}` as keyof CustomComponentsHeroComponent];
  const desc =
    data && data[`desc_${lang}` as keyof CustomComponentsHeroComponent];

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100dvh",
        minHeight: "750px",
        padding: { xs: "20px 25px", lg: "70px 75px" },
        display: "flex",
        justifyContent: { xs: "center", md: "end" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CustomImage
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
        src={bgImg}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(255,255,255,0) 100%)",
        }}
      />
      <Grid
        container
        sx={{
          width: "100%",
          ...FlexBox,
          zIndex: 1,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Typography
            component={motion.h1}
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              type: "spring",
              stiffness: 100,
            }}
            variant="h1"
            sx={{
              fontFamily: "'Athena'",
              textTransform: "uppercase",
              color: COLORS.WHITE,
            }}
          >
            {text}
          </Typography>
        </Grid>
        {right && (
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              margin: { xs: "40px 0 0 auto", md: 0 },
            }}
          >
            {desc && (
              <Grid item xs={2} md={3}>
                <Box
                  component={motion.hr}
                  initial={{ opacity: 0, width: "0%" }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{
                    delay: 0.2,
                    duration: 0.7,
                    ease: "linear",
                  }}
                  sx={{
                    width: "100%",
                    height: "2px",
                    background: COLORS.WHITE,
                  }}
                ></Box>
              </Grid>
            )}
            <Grid item xs={4} sx={{ marginLeft: "50px" }}>
              <Typography
                component={motion.p}
                initial={{ x: "50px", opacity: 0 }}
                animate={{ x: "0px", opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
                variant="H4Roboto"
                sx={{ color: COLORS.WHITE }}
              >
                {desc}
              </Typography>
            </Grid>
          </Grid>
        )}
        <CustomImage
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            right: 0,
            top: "-30px",
          }}
          src="/images/aboutheroelips1.png"
        />
        <CustomImage
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            right: 0,
            top: 130,
          }}
          src="/images/aboutheroelips2.png"
        />
      </Grid>
    </Stack>
  );
}
