import React, { useState, useEffect } from 'react';
import { AppContainer } from '../HeadMenuBar/HeaderStyles';
import { TranslationContext, setLanguage, Language } from '../LanguageSwitcher/18n';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import HeadMenuBar from '../HeadMenuBar/HeadMenuBar';

const AppContainerComponent = () => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem('language');
        return (savedLanguage as Language) || 'en';
    });

    const handleChangeLanguage = (lang: Language) => {
        setCurrentLanguage(lang);
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    useEffect(() => {
        setLanguage(currentLanguage);
    }, [currentLanguage]);

    return (
        <TranslationContext.Provider value={{ currentLanguage, handleChangeLanguage }}>
            <AppContainer>
                <HeadMenuBar />
                <div></div>
                <LanguageSwitcher />
            </AppContainer>
        </TranslationContext.Provider>
    );
};

export default AppContainerComponent;