import React from "react";
import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h2 className={styles.title}>Contacto</h2>
        <p className={styles.text}>
          "¡Estamos listos para atender tus consultas! Ya sea que necesites información sobre un modelo específico, tallas, pedidos al por mayor o desees hacer un seguimiento de tu compra, nuestro equipo está aquí para ayudarte.

Si deseas contactarnos, tienes las siguientes opciones:

Teléfono: Llámanos directamente al 387-443-8560 para una atención inmediata (horario de atención: 9:00 a 18:00, de Lunes a Viernes).

Correo Electrónico: Envíanos un mensaje detallado a nuestro buzón exclusivo para consultas: contacto@golesycamisetas.com."
        </p>
        
      </div>
    </div>
  );
}
