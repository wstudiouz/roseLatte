import Navbar from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import { CursorManager } from "@/ts/CursorManager";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const cursor = CursorManager.instance.cursor;
    cursor?.removeIcon();
    cursor?.removeImg();
    cursor?.removeText();
    cursor?.removeMedia();
  }, [router.pathname]);
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
          background:
            "linear-gradient(137.15deg, #000000 37.02%, rgba(112, 80, 88, 0.844253) 72.16%, #EC9FB6 103.65%)",
        }}
      >
        {children}
      </Stack>
      {router.pathname !== "/" && <Footer />}
    </Stack>
  );
}
