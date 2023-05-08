import Navbar from "./header";
import Footer from "./footer";
import { HeaderProvider } from "@/context/headerContext";
import { useRouter } from "next/router";
import { CursorManager } from "@/ts/CursorManager";
import { useEffect } from "react";

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
    <HeaderProvider>
      <Navbar />
      <main>{children}</main>
      {router.pathname !== "/" && <Footer />}
    </HeaderProvider>
  );
}
