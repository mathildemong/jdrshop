
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [formError, setFormError] = useState(false)

    const [successfulLogin, setSuccessfulLogin] = useState(false);

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );






    
    const login = formValues => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/login`, formValues)
            .then(res => {
                setCurrentUser(res.data);
                setSuccessfulLogin(true);
            })
            .catch(error => { 
                console.log(error);
                setFormError(true)
            })
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ successfulLogin, currentUser, formError, login }}>
            {children}
        </AuthContext.Provider>
    );
};

// import React,{createContext, useState, useContext } from 'react';

// const AuthContext = createContext({});

// export const AuthContextProvider = ({ children }) => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: '',
//     name: '',
//     address:'',
//   });

//   return (
//     <AuthContext.Provider value={{ credentials, setCredentials }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook to use the auth context
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default AuthContext
