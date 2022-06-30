import i18next from 'i18next';
import { LangType } from '../types';
import { fallbackLang } from './../constants';

export const getLang = (): LangType => {
	let lang = getItemFromLocalStorage("language");
	if (lang === "uz" || lang === "ru" || lang === "en") return lang;
	return fallbackLang
}

export const setLang = (lang: string) => {
	setItemToLocalStorage("language", lang)
}

export const changeLang = (lang: LangType) => {
	i18next.changeLanguage(lang);
}

export const getItemFromLocalStorage = (item: string) => localStorage.getItem(item) || "";
export const setItemToLocalStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getAccessToken = (): string =>
	getItemFromLocalStorage("access_token");