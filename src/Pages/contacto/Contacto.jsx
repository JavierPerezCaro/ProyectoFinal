import React from "react";
import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h2 className={styles.title}>Contacto</h2>
        <p className={styles.text}>
          Si deseas contactarnos, envíanos un mensaje a nuestro correo o completa el formulario de contacto.
        </p>
        <button className={styles.button}>Enviar Mensaje</button>
      </div>
    </div>
  );
}
