import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h2 className={styles.title}>¿Quienes somos?</h2>
<div>
  <p className={styles.text}>Somos una tienda dedicada a la venta de camisetas de fútbol de alta calidad.</p>
  <p className={styles.text}>Nuestro objetivo es ofrecer productos originales y modernos para todos los fanáticos del fútbol.</p>
  <p className={styles.text}>¡Tu pasión por el fútbol es la nuestra, y queremos que vistas los colores de tu equipo con la mejor calidad!</p>
</div>

      </div>
    </div>
  );
}

