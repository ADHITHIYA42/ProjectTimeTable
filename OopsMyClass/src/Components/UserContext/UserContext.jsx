import React, { createContext, useState, useContext } from 'react';

// Create Context
const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Example function to log in a user
  const login = (userData) => setUser(userData);

  // Example function to log out the user
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUser = () => useContext(UserContext);
