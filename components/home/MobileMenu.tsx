"use client";
import { createContext, useContext, useState } from "react";

type MenuContextType = {
  toggleMenu: () => void;
  closeMenu: () => void;
  isOpenMenu: boolean;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

function MobileMenu({ children }: { children: React.ReactNode }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => setIsOpenMenu((open) => !open);
  const closeMenu = () => setIsOpenMenu(false);

  return (
    <MenuContext.Provider
      value={{
        toggleMenu,
        isOpenMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

const useMobileMenu = () => {
  const context = useContext(MenuContext);
  if (!context)
    throw new Error("Menu context was used outside of menu provider");
  return context;
};

function Overlay() {
  const { isOpenMenu } = useMobileMenu();

  return (
    <div
      className={`fixed inset-0 z-10 bg-black/50 transition-opacity duration-300 lg:hidden ${isOpenMenu ? "visible opacity-100" : "invisible opacity-0"}`}
    />
  );
}

function Content({
  children,
}: {
  children:
    | React.ReactNode
    | ((state: { closeMenu: () => void }) => React.ReactNode);
}) {
  const { isOpenMenu, closeMenu } = useMobileMenu();
  return (
    <div
      className={`absolute top-22.5 w-full transform rounded-b-lg bg-white transition-all duration-300 lg:hidden ${isOpenMenu ? "pointer-events-auto z-20 translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
    >
      {typeof children === "function" ? children({ closeMenu }) : children}
    </div>
  );
}

function ContentTrigger({
  children,
}: {
  children:
    | React.ReactNode
    | ((state: { isOpenMenu: boolean }) => React.ReactNode);
}) {
  const { toggleMenu, isOpenMenu } = useMobileMenu();

  return (
    <button className="z-30 cursor-pointer lg:hidden" onClick={toggleMenu}>
      {typeof children === "function" ? children({ isOpenMenu }) : children}
    </button>
  );
}

MobileMenu.Overlay = Overlay;
MobileMenu.Content = Content;
MobileMenu.ContentTrigger = ContentTrigger;

export default MobileMenu;
