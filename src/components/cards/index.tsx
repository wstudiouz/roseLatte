import { HeaderContext } from "@/context/headerContext";
import { useContext, Dispatch, SetStateAction } from "react";
import CardsDrawer from "./Drawer";

type Props = {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

export function ShoppingBag({ drawerOpen, setDrawerOpen }: Props) {
  const { cards, setCards } = useContext(HeaderContext);
  return (
    <CardsDrawer
      cards={cards}
      setCards={setCards}
      drawerOpen={drawerOpen}
      setDrawerOpen={setDrawerOpen}
    />
  );
}
