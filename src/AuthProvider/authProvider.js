import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [token, setToken] = useState(() => {
    const token = localStorage.getItem('token');
    return token;
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