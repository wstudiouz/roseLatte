import Head from "next/head";
import localFont from "next/font/local";
import { Stack } from "@mui/material";
import HomePage from "@/components/home";
import React from "react";

const myFont = localFont({ src: "../assets/fonts/Athena.ttf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Roselatte.cz</title>
        <meta name="description" content="roselatte flowers and cafe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <HomePage />
      </Stack>
    </>
  );
}
