import { TFunction } from "i18next";
import { useTranslation } from 'react-i18next';
import { getLang } from "../../helpers";

export const useT = (): { t: TFunction, lang: "uz" | "ru" | "en" } => {
  const { t } = useTranslation();
  return { t, lang: getLang() };
}