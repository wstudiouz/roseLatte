import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { theme } from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import Layout from "@/components/Layout";
import "../assets/scss/mouseFollower.scss";
import "../components/loading/styles.css";
import "../components/header/s.css";
import { HeaderProvider } from "@/context/headerContext";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Header from "../components/header";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <HeaderProvider>
          <Header />
          <AnimatePresence mode="wait">
            <Layout key={router.pathname}>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </HeaderProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
