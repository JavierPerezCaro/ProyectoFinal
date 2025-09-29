import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ItemForm.module.css";

function ItemForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });

  // Simulación de carga en modo edición
  useEffect(() => {
    if (isEdit) {
      setFormData({
        name: `Camiseta ${id}`,
        price: 50,
        description: "Camiseta ya existente en la base.",
        img: `https://source.unsplash.com/400x400/?football,shirt,${id}`,
      });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEdit ? "Editando..." : "Creando...", formData);
    navigate("/gallery");
  };

  return (
    <section className={styles.formSection}>
      <h2>{isEdit ? "Editar producto" : "Crear producto"}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Precio
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Imagen (URL)
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </label>
        <label>
          Descripción
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.submitBtn}>
          {isEdit ? "Guardar cambios" : "Crear producto"}
        </button>
      </form>
    </section>
  );
}

export default ItemForm;
