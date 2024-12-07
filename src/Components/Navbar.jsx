import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state || {};
  /* console.log(theme)
   */

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
    /* console.log(dispatch); */
  };

  return (
    <nav
      className={`${styles.nav} ${
        theme === "dark" ? styles["dark-theme"] : styles["light-theme"]
      }`}
    >
      <button onClick={() => navigate(-1)} className={styles.button}>
        🔙
      </button>
      <Link to="/">
        <button className={styles.button}>Home</button>
      </Link>
      <Link to="/contact">
        <button className={styles.button}>Contacto</button>
      </Link>
      <Link to="/fav">
        <button className={styles.button}>Destacados</button>
      </Link>
      <button onClick={toggleTheme} className={styles.button}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
