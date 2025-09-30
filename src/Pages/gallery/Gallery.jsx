import React from "react";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";

function Gallery({ products, setProducts }) {
  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta camiseta?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  if (!products || products.length === 0) {
    return <p className={styles.loading}>Cargando camisetas...</p>;
  }

  return (
    <section className={styles.gallery}>
      <div className={styles.header}>
        <h2 className={styles.title}>Nuestra Colección</h2>
        <Link to="/product/new" className={styles.createBtn}>
          ➕ Agregar Camiseta
        </Link>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            {/* Imagen */}
            <img
              src={product.img}
              alt={product.name}
              className={styles.image}
            />
            {/* Nombre */}
            <h3 className={styles.name}>{product.name}</h3>
            {/* Descripción */}
            <p>{product.description}</p>
            {/* Precio */}
            <p className={styles.price}>
              <strong>{product.price}</strong>
            </p>
            {/* Botones */}
            <div className={styles.actions}>
              <Link
                to={`/product/${product.id}`}
                className={styles.buttonPrimary}
              >
                Ver
              </Link>
              <Link
                to={`/product/edit/${product.id}`}
                className={styles.buttonSecondary}
              >
                Editar
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className={styles.buttonSecondary}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
