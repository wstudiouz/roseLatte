import { useRouter } from "next/router";
import { CursorManager } from "@/ts/CursorManager";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "./footer";
import { COLORS } from "@/ts/Consts";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const cursor = CursorManager.instance.cursor;
    cursor?.removeIcon();
    cursor?.removeImg();
    cursor?.removeText();
    cursor?.removeMedia();
  }, [router.pathname]);

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (!lang) {
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
    >
      <Stack
        component={"main"}
        sx={{
          minHeight: "100vh",
          background: COLORS.BG,
        }}
      >
        {children}
      </Stack>
      {router.pathname !== "/" && <Footer />}
    </Stack>
  );
}
