


// ce quon veut : mettre lobjet user (usestate user setuser) objet qui servira les donnees generiques de tout les composants (a englober dans index.js)


import React,{createContext, useState, useContext } from 'react';

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
   
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};

export default AppContext
