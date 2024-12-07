import React,{useContext, useEffect , useState} from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { useParams } from "react-router-dom";

const Detail = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state || {};
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null); 
   useEffect(() => {
     const fetchUserDetails = async () => {
       try {
         const response = await fetch(
           `https://jsonplaceholder.typicode.com/users/${id}`
         );
         const data = await response.json();
         setUserDetails(data);
       } catch (error) {
         console.error("Error fetching user details:", error);
       }
     };

     fetchUserDetails();
   }, [id]);

    if (!userDetails) {
      return <p>Loading details...</p>;
    }

  return (
    <>
      <div className='container'>
        <h1>Detail Dentist ID: {id}</h1>
        <div className="card">
          <div className="card-container">
            <img src="/images/doctor.jpg" alt="imagen" />
          </div>
          <h2>{userDetails.name}</h2>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
          <p>Website: {userDetails.website}</p>
        </div>
      </div>
    </>
  );
}

export default Detail