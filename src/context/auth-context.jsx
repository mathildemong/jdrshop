
import React,{createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    name: '',
    address:'',
  });

  return (
    <AuthContext.Provider value={{ credentials, setCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext
