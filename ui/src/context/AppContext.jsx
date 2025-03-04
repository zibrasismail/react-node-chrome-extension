import { createContext, useContext } from "react";

const initialState = {
  links: [],
};

export const AppContext = createContext(initialState);

export const useAppContext = () => {
  return useContext(AppContext);
};
