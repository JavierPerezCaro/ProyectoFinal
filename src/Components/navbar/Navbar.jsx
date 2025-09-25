import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarCustom}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.brand}`} href="/">
          Mi proyecto
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link active ${styles.active}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="/gallery">
                Galería
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="/contacto">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="/about">
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
