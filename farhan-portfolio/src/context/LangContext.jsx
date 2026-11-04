"use client";
import { createContext, useContext } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  // Website is now standardized to 100% English
  const lang = "en";
  const toggle = () => {};
  const t = (val) => {
    if (!val) return "";
    if (typeof val === "string") return val;
    return val.en ?? val.id ?? "";
  };

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
