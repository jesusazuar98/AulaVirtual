import React from "react";
import "./Footer.css";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <section className="section1">
        <h1 className="texto1">Mantente en contacto</h1>
        <h1 className="texto2">Consejería de Educación. Región de Murcia</h1>
        <div>
          <CiGlobe className="icon-foo" />
          <a href="https://aulavirtual.murciaeduca.es">
            https://aulavirtual.murciaeduca.es/
          </a>
        </div>
        <div>
          <AiOutlineMail className="icon-foo" />
          <a href="https://aulavirtual.murciaeduca.es">
            https://aulavirtual.murciaeduca.es/
          </a>
        </div>
      </section>

      <section className="section2">
        <ul>
          <li className="sec2-1">
            <a href="https://aulavirtual.murciaeduca.es/admin/tool/dataprivacy/summary.php">
              <i>
                <BsFolder2Open />
              </i>
              Resumen de retención de datos
            </a>
          </li>
          <li className="sec2-2">
            <i>
              <AiOutlineMobile />
            </i>
            Descargar la app para dispositivos móviles
          </li>
        </ul>
      </section>
    </footer>
  );
}
