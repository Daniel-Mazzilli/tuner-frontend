import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";

const API = process.env.REACT_APP_API_URL;

export const ContextData = createContext();

function Provider({ children }) {
  const [songs, setSongs] = useState([]);
  const [trigger, setTrigger] = useState(1);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => setSongs(res.data))
      .catch((c) => console.warn("catch", c));
  }, [trigger]);

  return (
    <div>
      <ContextData.Provider value={{ songs, trigger, setTrigger }}>
        <Nav />
        {children}
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
