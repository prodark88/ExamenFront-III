import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer, initialState } from "../reducers/ThemeReducer";

/* export const initialState = {theme: "", data: []} */

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch]= useReducer(reducer, initialState)
  /* console.log(initialState) */

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(()=>{
    axios(url).then((res) => {
      /* console.log(res.data); */
      dispatch({ type: "SET_API_DATA", payload: res.data });
    });
  },[])
    
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
