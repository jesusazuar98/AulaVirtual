import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Content from "./components/contenido/Content.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <React.Fragment>
      {/*Componente Cabecera*/}
      <Header />
      {/*Componente Contenido*/}
      <Content />

      {/*Componente Footer*/}
      <Footer />
    </React.Fragment>
  );
}

export default App;
