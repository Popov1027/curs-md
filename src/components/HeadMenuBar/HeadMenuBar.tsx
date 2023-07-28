import React from 'react';
import { t } from '../LanguageSwitcher/18n';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
    return (
        <div className="w-full bg-gray-100 px-4">
            <div className="mx-auto flex justify-between">
                <div className="flex items-center">
                    <div className="text-gray-800 font-medium text-xs ml-20">
                        {t('header.information')}
                    </div>
                </div>
                <div className="links-container">
                    <div className="flex items-center space-x-4 md:space-x-1 ml-[-750px]">
                        <a href="#" className="text-gray-800 font-medium text-xs hover:underline">
                            {t('header.aboutUs')}
                        </a>
                        <span>|</span>
                        <a href="#" className="text-gray-800 font-medium text-xs hover:underline">
                            {t('header.getRates')}
                        </a>
                        <span>|</span>
                        <a href="#" className="text-gray-800 font-medium text-xs hover:underline">
                            {t('header.contacts')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
