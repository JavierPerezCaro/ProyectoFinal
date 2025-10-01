import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductForm.module.css";

function ProductForm() {
  const { id } = useParams(); // id de la URL
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });

  useEffect(() => {
    if (id) {
      // Primero intentamos buscar en localStorage
      const stored = JSON.parse(localStorage.getItem("myProducts")) || [];
      const localProduct = stored.find((p) => String(p.id) === id);

      if (localProduct) {
        // Si está en localStorage → cargamos sus datos
        setForm({
          name: localProduct.name,
          price: localProduct.price,
          description: localProduct.description,
          img: localProduct.img,
        });
      } else {
        // Si no está en localStorage → buscamos en la API
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
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Editar producto
      const stored = JSON.parse(localStorage.getItem("myProducts")) || [];
      const index = stored.findIndex((p) => String(p.id) === id);

      if (index !== -1) {
        // Actualizamos el producto en localStorage
        stored[index] = { ...stored[index], ...form };
        localStorage.setItem("myProducts", JSON.stringify(stored));
        console.log("Producto editado en localStorage:", stored[index]);
      } else {
        // Si no estaba en localStorage, asumimos que es un producto de API
        console.log("Editar producto de API (simulación):", form);
      }
    } else {
      // Crear producto nuevo
      const newProduct = {
        ...form,
        id: Date.now(), // id único
      };

      const stored = JSON.parse(localStorage.getItem("myProducts")) || [];
      stored.push(newProduct);
      localStorage.setItem("myProducts", JSON.stringify(stored));

      console.log("Nuevo producto guardado en localStorage:", newProduct);
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
