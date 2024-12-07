import React,{useContext} from 'react'
import { ContextGlobal } from './utils/global.context';
import "../styles/index.css";

const Footer = () => {

  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state || {};

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <footer
      className={`nav ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
    </footer>
  );
}

export default Footer
