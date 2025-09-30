// src/Pages/itemdetail/ItemDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem({
          id: data.id,
          name: `Camiseta ${data.title.substring(0, 20)}`,
          description: data.body,
          price: `$${(Math.random() * 100).toFixed(2)}`,
          img: `https://source.unsplash.com/400x400/?football,shirt,${data.id}`,
        });
      });
  }, [id]);

  if (!item) return <p className={styles.loading}>Cargando detalle...</p>;

  return (
    <div className={styles.detail}>
      <img src={item.img} alt={item.name} className={styles.image} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p className={styles.price}>{item.price}</p>
      <div className={styles.actions}>
        <Link to={`/editar/${item.id}`} className={styles.button}>
          ✏️ Editar
        </Link>
        <Link to="/" className={styles.button}>
          ⬅ Volver
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;

