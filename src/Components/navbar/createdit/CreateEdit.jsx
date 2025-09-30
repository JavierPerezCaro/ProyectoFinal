// src/Pages/createedit/CreateEdit.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CreateEdit.module.css";

function CreateEdit({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const editing = Boolean(id); // si hay id → estamos editando
  const productToEdit = products.find((p) => p.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    img: "",
  });

  // Si estamos editando, cargamos datos en el formulario
  useEffect(() => {
    if (editing && productToEdit) {
      setFormData(productToEdit);
    }
  }, [editing, productToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      // Editar producto existente
      setProducts(
        products.map((p) => (p.id === parseInt(id) ? { ...formData, id: p.id } : p))
      );
    } else {
      // Crear producto nuevo
      const newProduct = {
        ...formData,
        id: Date.now(), // id único simulado
      };
      setProducts([...products, newProduct]);
    }

    navigate("/"); // volver al home
  };

  return (
    <div className={styles.formContainer}>
      <h2>{editing ? "Editar Camiseta" : "Crear Camiseta"}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Precio"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="img"
          placeholder="URL de imagen"
          value={formData.img}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          {editing ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
}

export default CreateEdit;
