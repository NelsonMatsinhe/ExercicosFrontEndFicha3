
import  { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});

  const updateGlobalState = (data) => {
    setGlobalState({ ...globalState, ...data });
  };

  return (
    <AppContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </AppContext.Provider>
  );
};
