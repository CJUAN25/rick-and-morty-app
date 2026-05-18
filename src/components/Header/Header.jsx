import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  const location = useLocation();

  return (
    <header className="header-galactico">
      {/* Logo e identidad */}
      <div className="header-identidad">
        <img src={logo} alt="Logo Federación" className="header-logo-img" />
        <div className="header-titulos">
          <h1>FEDERACIÓN GALÁCTICA</h1>
          <span>Portal de Credenciales</span>
        </div>
      </div>

      {/* Buscador */}
      <div className="header-search">
        <SearchBar />
      </div>

      {/* Navegación */}
      <nav className="header-nav">
        <Link
          to="/"
          className={`nav-btn ${location.pathname === "/" ? "active" : ""}`}
        >
          INICIO
        </Link>
        <Link
          to="/filtros"
          className={`nav-btn ${location.pathname === "/filtros" ? "active" : ""}`}
        >
          FILTRAR POR ESPECIE
        </Link>
      </nav>
    </header>
  );
}

export default Header;
