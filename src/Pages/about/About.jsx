import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h2 className={styles.title}>Sobre Nosotros</h2>
        <p className={styles.text}>
          Somos una tienda dedicada a la venta de camisetas de fútbol de alta calidad.
          Nuestro objetivo es ofrecer productos originales y modernos para todos los fanáticos del fútbol.
        </p>
        <img
          src="https://source.unsplash.com/600x400/?football,jersey"
          alt="Sobre Nosotros"
          className={styles.image}
        />
      </div>
    </div>
  );
}

