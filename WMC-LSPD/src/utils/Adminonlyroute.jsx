import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateOnlyRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null to signify the loading state
  const navigate = useNavigate();

  const authenticated = async () => {
    try {
      const response = await fetch('http://localhost:8000/checkAuthentication', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        if(data["role"]=="admin"){
            console.log(data);
            print(data)
            console.log('Authenticated');
            setIsAuthenticated(true);
 }
        setIsAuthenticated(false)
     } else if (response.status === 307) {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Failed to fetch', error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    authenticated().catch(console.error);
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // or a spinner/loading component
  }

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateOnlyRoute;