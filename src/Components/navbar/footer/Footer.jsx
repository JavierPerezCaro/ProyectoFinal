import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} Mi Sitio Web</p>
        <p className="mb-0">
          <a href="/about">Acerca de</a> | <a href="/contacto">Contacto</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
