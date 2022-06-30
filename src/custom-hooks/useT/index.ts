import { TFunction } from "i18next";
import { useTranslation } from 'react-i18next';
import { getLang } from "../../helpers";
import { LangType } from "../../types";

export const useT = (): { t: TFunction, lang: LangType } => {
  const { t } = useTranslation();
  return { t, lang: getLang() };
}