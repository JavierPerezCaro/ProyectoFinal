import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams(); // 👈 saca el ID de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulación de fetch por ID → reemplazar con tu API real
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          id: data.id,
          name: `Camiseta ${data.title}`,
          price: `$${(data.price * 10).toFixed(0)}`,
          description: data.description,
          img: `https://source.unsplash.com/400x400/?football,shirt,${data.id}`,
        });
      })
      .catch((err) => console.error("Error cargando producto:", err));
  }, [id]);

  if (!product) {
    return <p className={styles.loading}>Cargando producto...</p>;
  }

  return (
    <div className={styles.detail}>
      <img src={product.img} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <h2>{product.name}</h2>
        <p className={styles.price}>{product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.button}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductDetail;
