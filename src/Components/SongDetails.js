import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ContextData } from "../Provider/Provider";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function SongDetails() {
  const { id } = useParams();
  const { setTrigger, trigger } = useContext(ContextData);
  const navigate = useNavigate();
  const [details, setDetails] = useState({});

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(
        () => {
          navigate("/songs");
          setTrigger(-trigger);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteSong();
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => setDetails(res.data))
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  return (
    <div id="details">
      <h3>Song Details id:{id}</h3>
      <p>
        {details.name} by {details.artist} - album: {details.album} - time:{" "}
        {details.time} - favorite: {String(details.is_favorite)}
      </p>
      <div className="buttons">
        <Link to="/songs">Back</Link>
        <Link to={`/songs/${id}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
