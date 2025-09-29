import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";

function ItemDetail() {
  const { id } = useParams();

  // 🔽 Simulación de fetch → después conectalo con tu API
  const product = {
    id,
    name: `Camiseta ${id}`,
    price: `$${(id * 15).toFixed(0)}`,
    img: `https://source.unsplash.com/400x400/?football,shirt,${id}`,
    description: "Camiseta oficial de fútbol, edición limitada.",
  };

  return (
    <section className={styles.detail}>
      <img src={product.img} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <h2>{product.name}</h2>
        <p className={styles.price}>{product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.actions}>
          <button className={styles.buyBtn}>Comprar</button>
          <Link to={`/editar/${product.id}`} className={styles.editBtn}>
            Editar
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
