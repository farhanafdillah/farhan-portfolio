"use client";
import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("id");
  const toggle = () => setLang((l) => (l === "id" ? "en" : "id"));
  const t = (obj) => (obj && typeof obj === "object" ? obj[lang] ?? obj.id : obj);
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
