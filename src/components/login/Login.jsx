import React, { useState } from "react";
import "./Login.css";
import { HiMail, HiLockClosed } from "react-icons/hi";

export default function Login() {
  const [user, changeUser] = useState({ name: "", pass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    changeUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Se ha introducido el usuario " +
        user.name +
        " con la contraseña " +
        user.pass
    );
  };

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit}>
        <p>Accede a la plataforma</p>

        <label htmlFor="user">Nombre de usuario</label>
        <div className="usu">
          <i>
            <HiMail className="mail-icon" />
          </i>

          <input
            type="text"
            value={user.name}
            name="name"
            placeholder="Nombre de usuario"
            onChange={handleChange}
          />
        </div>

        <label htmlFor="pass">Contraseña</label>
        <div className="pass">
          <i>
            <HiLockClosed />
          </i>

          <input
            type="text"
            name="pass"
            value={user.pass}
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="accede">
          Acceder
        </button>
      </form>
      <a
        href="https://educas.murciaeduca.es/cas/login?service=http%3A%2F%2Feduid.murciaeduca.es%2Fpages%2F"
        className="forgetten-pass"
      >
        ¿Olvidó su nombre de usuario o contraseña?
      </a>
    </div>
  );
}
