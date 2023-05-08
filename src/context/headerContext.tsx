import { Dispatch, SetStateAction, createContext, useState } from "react";

interface HeaderContext {
  openHeader: boolean;
  setOpenHeader: Dispatch<SetStateAction<boolean>>;
}

export const HeaderContext = createContext<HeaderContext>({
  openHeader: false,
  setOpenHeader: () => {},
});

type HeaderContextType = {
  children: React.ReactNode;
};

export const HeaderProvider = ({ children }: HeaderContextType) => {
  const [openHeader, setOpenHeader] = useState<boolean>(false);
  return (
    <HeaderContext.Provider value={{ openHeader, setOpenHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};
