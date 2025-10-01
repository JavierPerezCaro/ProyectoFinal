import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";

function Gallery({ products, setProducts }) {
  // 🔄 Cargar siempre desde localStorage para mantener sincronía
  const loadProducts = () => {
    const localProducts = JSON.parse(localStorage.getItem("myProducts")) || [];

    // combinamos evitando duplicados
    const allProducts = [
      ...products.filter((p) => !localProducts.some((lp) => lp.id === p.id)),
      ...localProducts,
    ];

    setProducts(allProducts);
  };

  useEffect(() => {
    loadProducts();

    // 👂 Escuchar cambios en localStorage (ej. desde otra pestaña)
    const handleStorageChange = () => {
      loadProducts();
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []); // solo al montar

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta camiseta?")) {
      // 1️⃣ Filtrar del estado (refleja el cambio en la vista)
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);

      // 2️⃣ Filtrar también en localStorage
      const localProducts = JSON.parse(localStorage.getItem("myProducts")) || [];
      const filteredLocal = localProducts.filter((p) => p.id !== id);
      localStorage.setItem("myProducts", JSON.stringify(filteredLocal));
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
            <img
              src={product.img}
              alt={product.name}
              className={styles.image}
            />
            <h3 className={styles.name}>{product.name}</h3>
            <p>{product.description}</p>
            <p className={styles.price}>
              <strong>{product.price}</strong>
            </p>
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
