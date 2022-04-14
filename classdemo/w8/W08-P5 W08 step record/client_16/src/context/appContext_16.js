import React, { useReducer, useContext } from 'react';
import reducer_16 from './reducer_16';
import { CLEAR_ALERT, DISPLAY_ALERT } from './action_16';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};
const AppContext_16 = React.createContext();

const AppProvider_16 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_16, initialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  return (
    <AppContext_16.Provider value={{ ...state, displayAlert, clearAlert }}>
      {children}
    </AppContext_16.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_16);
};

export { AppProvider_16, initialState, useAppContext };
