import {React,useState} from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from "i18nextConf";

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
          {t("Openia")}
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link
                to="/davinci"
                className="no-underline black"
                onClick={closeDropdown}
              >
                DaVinci
              </Link>
              <Link
                to="/image"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Imagen
              </Link>
              <Link
                to="/consultas"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Consultas
              </Link>
              <Link
                to="/correccion"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Correccion Texto
              </Link>
              <Link
                to="/pelicula"
                className="no-underline black"
                onClick={closeDropdown}
              >
                Pelicula a Emoji
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