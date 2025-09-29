import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 navegación con Link
import styles from "./Gallery.module.css";

function Gallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulación de API → reemplaza con tu backend real
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        const mappedData = data.map((item, index) => ({
          id: index + 1,
          name: `Camiseta ${item.title.substring(0, 12)}...`,
          price: `$${(item.price * 10).toFixed(0)}`,
          img: `https://source.unsplash.com/300x300/?football,shirt,${index}`,
        }));
        setProducts(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className={styles.loading}>Cargando camisetas...</p>;
  }

  return (
    <section className={styles.gallery}>
      <div className={styles.header}>
        <h2 className={styles.title}>Nuestra Colección</h2>
        {/* 🔗 Botón para crear producto */}
        <Link to="/crear" className={styles.createBtn}>
          + Agregar producto
        </Link>
      </div>

      <div className={styles.grid}>
        {products.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.img} alt={item.name} className={styles.image} />
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.price}>{item.price}</p>

            {/* 🔗 Botones de acción */}
            <div className={styles.actions}>
              <Link to={`/item/${item.id}`} className={styles.buttonPrimary}>
                Ver más
              </Link>
              <Link to={`/editar/${item.id}`} className={styles.buttonSecondary}>
                Editar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
