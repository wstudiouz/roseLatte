import { Box, Stack, keyframes } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getter } from "@/ts/utils/Fetcher";
import TopHero from "../topHero";
import {
  ContactPageListResponseDataItem,
  FooterListResponseDataItem,
} from "@/ts/REST/api/generated";
import ContactUs from "./ContactUs";
export default function Contact() {
  const [data, setData] = useState<ContactPageListResponseDataItem>();
  const [rigthTexts, setRightTexts] = useState<FooterListResponseDataItem>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getValues = async () => {
      const result = await getter("contact-page?populate=Hero");
      if (result.ok && result.data) {
        setData(result.data);
      }
      const texts = await getter(
        "footer?populate=SocialMedia.Items,CallUs,LegalArea.items"
      );
      if (texts.ok && texts.data) {
        setRightTexts(texts.data);
      }
    };
    getValues();
  }, []);

  const skeletonGradient = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

  return (
    <Stack>
      {data && data.attributes?.Hero && (
        <TopHero
          bgImg="/images/homeflower.jpg"
          right
          data={data.attributes.Hero}
        />
      )}
      {rigthTexts && <ContactUs data={rigthTexts} />}
      {data && data.attributes?.map && (
        <Box
          sx={{
            width: "100%",
            height: {
              xs: "200px",
              sm: "280px",
              md: "350px",
              lg: "424px",
              xl: "504px",
            },
            display: loaded ? "block" : "none",
          }}
          onLoad={() => setLoaded(true)}
          component="iframe"
          src={data.attributes.map}
        ></Box>
      )}
      {!loaded && (
        <Stack
          sx={{
            width: "100%",
            height: {
              xs: "200px",
              sm: "280px",
              md: "350px",
              lg: "424px",
              xl: "504px",
            },
            position: "relative",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(\n    90deg,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 0.1) 50%,\n    rgba(0, 0, 0, 0) 100%\n  )",
              backgroundSize: "200% 100%",
              animation: `${skeletonGradient} 0.5s linear infinite`,
            }}
          ></Stack>
        </Stack>
      )}
    </Stack>
  );
}
