import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ContextData } from "../Provider/Provider";
import axios from "axios";
import { stars } from "../Functions";
import Songs from "./Songs";
import star from "../Assets/star.png"
const API = process.env.REACT_APP_API_URL;

export default function PlaylistDetails() {
  const { id } = useParams();
  const { setTrigger, trigger } = useContext(ContextData);
  const navigate = useNavigate();
  const [details, setDetails] = useState({});

  const deletePlaylist = () => {
    axios
      .delete(`${API}/playlists/${id}`)
      .then(
        () => {
          navigate("/playlists");
          setTrigger(-trigger);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deletePlaylist();
  };

  useEffect(() => {
    axios
      .get(`${API}/playlists/${id}`)
      .then((res) => setDetails(res.data))
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  const { creator, title, description, rating } = details;

  return (
    <div id="details">
      <h2>{title}</h2>
      <p>Created by <span className="bold">{creator}</span></p>
      <p><span className="italic">{description}</span></p>
      <p>Rating: {rating &&
        stars(rating, star).map((e, i) => (
          <img key={i} src={star} height="18px" />
        ))}</p>
      <div className="buttons">
        <Link to="/playlists">Back</Link>
        <Link to={`/playlists/${id}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <Songs />
    </div>
  );
}
