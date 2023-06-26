import {React,useState} from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

const MenuDropdown = () => {

  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className="dropdown ml1">
          <div className="dropdown-btn" onClick={toggleDropdown}>
          {t("openia")}
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link
                to="/translate"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Traductor
              </Link>
              <Link
                to="/imagen"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Imagen
              </Link>
              <Link
                to="/emojis"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Emojis
              </Link>
              <Link
                to="/libros"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Libros
              </Link>
              <Link
                to="/correccion"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Correccion texto
              </Link>
              <Link
                to="/receta"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Recetas
              </Link>
            </div>
          )}
        </div>
  );
};

export default MenuDropdown;