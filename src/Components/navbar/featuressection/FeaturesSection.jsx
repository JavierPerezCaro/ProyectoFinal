import React from "react";
import styles from "./FeaturesSection.module.css";

function FeaturesSection() {
  const features = [
    { id: 1, title: "100% Originales", desc: "Todas nuestras camisetas son oficiales y de temporada." },
    { id: 2, title: "Envíos Rápidos", desc: "Recibe tu pedido en 48hs en cualquier parte del país." },
    { id: 3, title: "Pago Seguro", desc: "Múltiples métodos de pago confiables y protegidos." },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {features.map((item) => (
            <div key={item.id} className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

