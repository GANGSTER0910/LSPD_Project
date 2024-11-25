import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exit = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('https://lspd-project.onrender.com/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        alert('Logout successful!');

        localStorage.removeItem('authToken');
        sessionStorage.clear();

        navigate('/station');
      } else {
        console.error('Failed to log out:', await response.json());
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Exit;
