import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const API = process.env.REACT_APP_API_URL;

export const ContextData = createContext();

function Provider({ children }) {
  const [playlists, setPlaylists] = useState([]);
  const [trigger, setTrigger] = useState(1);

  useEffect(() => {
    axios
      .get(`${API}/playlists`)
      .then((res) => setPlaylists(res.data))
      .catch((c) => console.warn("catch", c));
  }, [trigger]);

  return (
    <div>
      <ContextData.Provider value={{ playlists, trigger, setTrigger }}>
        <Nav />
        <Footer />
        {children}
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
