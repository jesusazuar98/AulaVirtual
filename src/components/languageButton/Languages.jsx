import React, { useState, useEffect, useRef } from "react";
import "./Languages.css";
import { CiGlobe } from "react-icons/ci";
import ChoseLanguage from "./ChoseLanguage";

export default function Languages() {
  const [click, changeClick] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        changeClick(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div ref={menuRef}>
        <i>
          <a href="#">
            <CiGlobe
              className="logo-languages"
              onClick={() => changeClick(!click)}
            />
          </a>
        </i>

        <div className={`show-languages ${click ? "active" : "inactive"}`}>
          <ChoseLanguage
            idioma="Español"
            text="Español (es)"
            enlace="https://aulavirtual.murciaeduca.es/?lang=es"
          />
          <ChoseLanguage
            idioma="Francés"
            text="Frances (fr)"
            enlace="https://aulavirtual.murciaeduca.es/?lang=fr"
          />
          <ChoseLanguage
            idioma="Inglés"
            text="Ingles (en)"
            enlace="https://aulavirtual.murciaeduca.es/?lang=en"
          />
          <ChoseLanguage
            idioma="Alemán"
            text="Aleman (al)"
            enlace="https://aulavirtual.murciaeduca.es/?lang=de"
          />
          <ChoseLanguage
            idioma="Portugues"
            text="Portugues (pr)"
            enlace="https://aulavirtual.murciaeduca.es/?lang=pt"
          />
        </div>
      </div>
    </>
  );
}
