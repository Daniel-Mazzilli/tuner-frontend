import { createContext } from "react";
import Nav from "../Components/Nav";

export const ContextData = createContext();

function Provider({ children }) {
  return (
    <div>
      <ContextData.Provider>
        <Nav />
        {children}
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
