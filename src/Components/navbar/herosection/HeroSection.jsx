import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Camisetas de Fútbol Originales</h1>
        <p className={styles.subtitle}>Encuentra tu equipo favorito al mejor precio</p>
        <a href="/gallery" className={styles.button}>Ver Colección</a>
      </div>
    </section>
  );
}

export default HeroSection;