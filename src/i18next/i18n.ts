import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationAZ from "@/i18next/locales/az/translation.json";
import translationEN from "@/i18next/locales/en/translation.json";
import translationRU from "@/i18next/locales/ru/translation.json";

const resources = {
  az: { translation: translationAZ },
  en: { translation: translationEN },
  ru: { translation: translationRU },
} as const;

const storedLang =
  (localStorage.getItem("lang") as keyof typeof resources) || "az";

i18n.use(initReactI18next).init({
  resources,
  lng: storedLang,
  fallbackLng: ["az", "en", "ru"],
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng: string) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
