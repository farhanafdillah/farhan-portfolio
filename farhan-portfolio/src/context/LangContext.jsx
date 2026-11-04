"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("preferred_lang");
    if (stored) {
      setLang(stored);
    }
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "id" : "en";
      localStorage.setItem("preferred_lang", next);
      return next;
    });
  };

  const t = (obj) => {
    if (!obj || typeof obj !== "object") return obj;
    return obj[lang] ?? obj.en ?? obj.id;
  };

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
