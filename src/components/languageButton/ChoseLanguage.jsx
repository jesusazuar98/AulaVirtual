import React, { useState } from "react";
import "./ChoseLanguage.css";

export default function ChoseLanguage({ idioma, text, enlace }) {
  const [language, changeLanguage] = useState("");

  function muestraIdioma(language) {
    changeLanguage(language);

    alert("Se ha cambiado el idioma a " + language);
  }

  return (
    <>
      <a onClick={() => muestraIdioma(idioma)} href={enlace} className="idioma">
        {text}
      </a>
    </>
  );
}
