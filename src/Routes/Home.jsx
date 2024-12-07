import React, { useContext }  from 'react'
import Card from '../Components/Card'
import "../styles/index.css";
import { ContextGlobal } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { apiData } = state || {};
  const { theme } = state || {};
  /* console.log(apiData)
  console.log(theme); */
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });

  };
  if (!apiData || !Array.isArray(apiData) || apiData.length === 0) {
      return <p>Loading data...</p>;
    }
  return (
    <main
      className={`container ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <h1>Home</h1>
      <div className="card-grid">
        {apiData.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
          />
        ))}
      </div>
    </main>
  );
}

export default Home