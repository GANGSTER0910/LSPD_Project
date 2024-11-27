import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBtn from "../../buttons/arrowBtn";
import DotBtn from "../../buttons/DotBtn";

const Exit = ({ onExitComplete }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true); // Indicate the logout process has started
    try {
      const response = await fetch('https://lspd-project.onrender.com/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        alert('Logout successful!');

        // Clear localStorage and sessionStorage
        localStorage.removeItem('authToken');
        sessionStorage.clear();

        // Notify the parent component (if needed)
        if (onExitComplete) onExitComplete();

        // Redirect to login or home page
        navigate('/');
      } else {
        const errorMessage = await response.json();
        alert(`Failed to log out: ${errorMessage.message || 'Unknown error'}`);
      }
    } catch (error) {
      alert(`Error during logout: ${error.message}`);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
    {/* <h1 className="text-2xl font-semibold mb-4">Logout</h1> */}
    <div
      onClick={handleLogout}
      className="flex flex-col justify-center items-center"
    >
      <h2 className="lg:hidden text-black bg-white bg-opacity-[50%] rounded-md px-3">Exit</h2>
      <DotBtn 
        nav={isLoading ? "Logging out..." : "Exit"} 
        gate={true} 
        rotate={true} 
        disabled={isLoading} 
      />
    </div>
  </div>
  

  );
};

export default Exit;
