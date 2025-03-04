import { useReducer } from "react";
import { AppContext } from "./AppContext.jsx";

const initialState = {
  links: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LINK":
      return { ...state, links: [...state.links, action.payload] };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
