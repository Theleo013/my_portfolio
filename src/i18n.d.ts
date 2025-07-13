import "react-i18next";
import translationEN from "@/i18next/locales/en/translation.json";

type DefaultTranslation = typeof translationEN;

declare module "react-i18next" {
  interface Resources {
    translation: DefaultTranslation;
  }
}
