import React, { useState, useEffect, useContext } from 'react';
import en from './locales/en.json';
import ro from './locales/ro.json';
import ru from './locales/ru.json';

export type Language = 'en' | 'ro' | 'ru';

export type TranslationMessages = {
    [key: string]: string;
};

const messages: { [key in Language]: TranslationMessages } = {
    en,
    ro,
    ru,
};

const languageData: { [key in Language]: string } = {
    en: 'English',
    ro: 'Romanian',
    ru: 'Русский',
};

export type LanguageData = {
    code: Language;
    name: string;
};

export function getAllTranslations(): LanguageData[] {
    return Object.keys(messages).map((code) => ({
        code: code as Language,
        name: languageData[code as Language],
    }));
}

let currentLanguage: Language = (() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
})();

export function setLanguage(lang: Language) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
}

export function t(key: string): string {
    const message = messages[currentLanguage];
    return message ? message[key] || key : key;
}

export const TranslationContext = React.createContext<{
    currentLanguage: Language;
    handleChangeLanguage: (lang: Language) => void;
}>({
    currentLanguage,
    handleChangeLanguage: () => {},
});

export function useTranslation() {
    return useContext(TranslationContext);
}
