import React,{useContext} from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context';
import "../styles/Form.css";
const Contact = () => {
   const { state, dispatch } = useContext(ContextGlobal);
   const { theme } = state || {};
   const toggleTheme = () => {
     dispatch({ type: "TOGGLE_THEME" });
   };
  return (
    <div
      className={`container ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
}

export default Contact