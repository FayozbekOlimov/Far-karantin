import { TFunction } from "i18next";
import { useTranslation } from 'react-i18next';
import { getLang, LangType } from "../../helpers";

export const useT = (): { t: TFunction, lang: LangType } => {
  const { t } = useTranslation();
  return { t, lang: getLang() };
}