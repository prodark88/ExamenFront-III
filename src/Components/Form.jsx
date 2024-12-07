import React, { useState, useContext } from "react";
import "../styles/Form.css";
import { ContextGlobal } from "./utils/global.context";
const Form = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { apiData } = state || {};
  const { theme } = state || {};
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "" };

    // Validación de nombre
    if (formData.name.length <= 5) {
      newErrors.name = "El nombre debe tener más de 5 caracteres.";
      isValid = false;
    }

    // Validación de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, ingresa un email válido.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que el formulario sea válido
    if (validateForm()) {
      setSuccessMessage(
        `Gracias ${formData.name}, te contactaremos cuando antes vía mail.`
      );
      console.log("Formulario enviado con éxito:", formData);
      setErrorMessage("");
    } else {
      setSuccessMessage("");
      setErrorMessage("Por favor verifique su información nuevamente.");
    }
  };

  return (
    <div>
      <h1>Formulario de Contacto</h1>
      <form
        onSubmit={handleSubmit}
        className={`${
          theme === "dark" ? "dark-theme" : "light-theme"
        }`}
      >
        <div>
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre completo"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>

      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Form;
