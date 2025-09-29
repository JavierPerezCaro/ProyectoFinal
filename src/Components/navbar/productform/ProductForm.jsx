import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductForm.module.css";

function ProductForm() {
  const { id } = useParams(); // si hay id → edición
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });

  useEffect(() => {
    if (id) {
      // Simulación de fetch para editar
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setForm({
            name: `Camiseta ${data.title}`,
            price: (data.price * 10).toFixed(0),
            description: data.description,
            img: `https://source.unsplash.com/400x400/?football,shirt,${data.id}`,
          });
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Editar producto (PUT)
      console.log("Editar producto:", form);
    } else {
      // Crear producto (POST)
      console.log("Nuevo producto:", form);
    }

    navigate("/gallery"); // volver a la galería
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{id ? "Editar Producto" : "Nuevo Producto"}</h2>
      
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Precio:
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Descripción:
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Imagen (URL):
        <input
          type="text"
          name="img"
          value={form.img}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className={styles.button}>
        {id ? "Guardar Cambios" : "Crear Producto"}
      </button>
    </form>
  );
}

export default ProductForm;
