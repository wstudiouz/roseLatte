import { CustomComponentsPricesComponent } from "@/ts/REST/api/generated";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type Card = {
  id: number;
  title_en?: string;
  title_cz?: string;
  count: number;
  img?: string;
  priceId: number;
  prices?: CustomComponentsPricesComponent[];
};

interface HeaderContext {
  openHeader: boolean;
  setOpenHeader: Dispatch<SetStateAction<boolean>>;
  setLang: Dispatch<SetStateAction<string>>;
  lang: string;
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
}
export const HeaderContext = createContext<HeaderContext>({
  openHeader: false,
  setOpenHeader: () => {},
  setLang: () => {},
  lang: "en",
  cards: [],
  setCards: () => {},
});

type HeaderContextType = {
  children: React.ReactNode;
};

export const HeaderProvider = ({ children }: HeaderContextType) => {
  const [openHeader, setOpenHeader] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("en");
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
    }

    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  useEffect(() => {
    if (cards.length) {
      localStorage.setItem("cards", JSON.stringify(cards));
    }
  }, [cards]);

  return (
    <HeaderContext.Provider
      value={{ openHeader, setOpenHeader, lang, setLang, cards, setCards }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
