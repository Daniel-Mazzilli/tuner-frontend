import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";

const API = process.env.REACT_APP_API_URL;

export const ContextData = createContext();

function Provider({ children }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => setSongs(res.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div>
      <ContextData.Provider value={{ songs }}>
        <Nav />
        {children}
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
