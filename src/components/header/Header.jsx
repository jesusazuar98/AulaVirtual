import React from "react";
import "./Header.css";
import Languages from "../languageButton/Languages";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="item logo">
          <a href="https://aulavirtual.murciaeduca.es/index.php?lang=es">
            <img
              src="https://aulavirtual.murciaeduca.es/pluginfile.php/1/core_admin/logo/0x200/1677155381/logo_aulavirtual_cabecera.png"
              alt="logo aula"
            />
          </a>
          <ul className="questions">
            <li>
              <a
                className="quest"
                href="http://eduwiki.murciaeduca.es/wiki/index.php/Categor%C3%ADa:AulaVirtual2016"
              >
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>

        <div className="item languages">
          <Languages />
        </div>
      </nav>
    </div>
  );
};

export default Header;
