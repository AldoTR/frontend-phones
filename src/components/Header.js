import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from './constants';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";
import MenuDropdown from "./openai"

const Header = () => {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div className="flex pa1 justify-between nowrap orange">
            <div className="flex flex-fixed black">
                <Link to="/" className="no-underline black">
                    <div className="fw7 mr1">Phones</div>
                </Link>
                <Link to="/" className="ml1 no-underline black">
                API Phones
                </Link>
                <div className="ml1">|</div>
                <Link
                to="/create"
                className="ml1 no-underline black"
                >
                {t('crear')}
                </Link>
                <div className="ml1">|</div>
                <MenuDropdown/>
                <div className="ml1">|</div>
                <Link to="/search" className="ml1 no-underline black" >
                {t('buscar')}
                </Link>
                <div className="ml1">|</div>
                <div className="flex flex-fixed">
                    <div className="ml1 pointer black">
                        {t('language')}
                    </div>
                    <div className="ml1 pointer black"> : </div>
                    <div>
                        <LanguageSelect className="ml1 pointer black" />
                    </div>
                </div>

            </div>
            <div className="flex flex-fixed">
                {authToken ? (
                <div
                    className="ml1 pointer black"
                    onClick={() => {
                    localStorage.removeItem(AUTH_TOKEN);
                    navigate(`/`);
                    }}
                >
                    Logout
                </div>
                ) : (
                <Link
                    to="/login"
                    className="ml1 no-underline black"
                >
                    Login
                </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
