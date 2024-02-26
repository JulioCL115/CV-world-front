import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [token, setToken] = useState(() => {
      const token = localStorage.getItem('token');
      return token;
   });

   useEffect(() => {
      if (token !== null && token !== undefined) {
         localStorage.setItem('token', JSON.stringify(token));
      } else {
         localStorage.removeItem('token');
      }
   }, [token]);

   return (
      <AuthContext.Provider value={{ token, setToken }}>
         {children}
      </AuthContext.Provider>
   );
};