import React from 'react';
import { useTranslation, Language, getAllTranslations, LanguageData, t } from './18n';


const LanguageSwitcher = () => {
    const { currentLanguage, handleChangeLanguage } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = event.target.value as Language;
        handleChangeLanguage(lang);
    };

    return (
        <div className="inline-block float-right relative -mt-6 mr-20">
            <label htmlFor="language-select"></label>
            <select className="text-xs font-medium text-black line-height-4 bg-gray-100 hover:underline outline-0" value={currentLanguage} onChange={handleLanguageChange}>
                {getAllTranslations().map((language: LanguageData) => (
                    <option key={language.code} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;
