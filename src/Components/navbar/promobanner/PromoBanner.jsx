import React from "react";
import styles from "./PromoBanner.module.css";

function PromoBanner() {
  return (
    <section className={styles.banner}>
      <p className={styles.text}>
        🚀 Envío gratis en pedidos superiores a <span>$30.000</span> 🛒
      </p>
    </section>
  );
}

export default PromoBanner;
