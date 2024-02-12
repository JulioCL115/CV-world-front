import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [token, setToken] = useState(() => {
    const savedAuth = localStorage.getItem('token');
    return savedAuth ? JSON.parse(savedAuth) : null;
 });

 useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
 }, [token]);

 return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
 );
};