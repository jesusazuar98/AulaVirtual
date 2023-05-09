import React from "react";
import "./Content.css";
import Login from "../login/Login.jsx";

export default function Content() {
  return (
    <>
      <div className="moodleaula-container">
        <div className="moodleaula-container1">
          <h1 className="title-container">Moodle AulaVirtual</h1>
        </div>

        <div className="form-container">
          <Login />
        </div>
      </div>
    </>
  );
}
