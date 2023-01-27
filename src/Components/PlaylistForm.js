import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextData } from "../Provider/Provider";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function PlaylistForm() {
  const { id } = useParams();
  const { setTrigger, trigger } = useContext(ContextData);
  const navigate = useNavigate();

  const [playlist, setPlaylist] = useState({
    title: "",
    creator: "",
    description: "",
    rating: ""
  });

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`${API}/playlists/${id}`)
        .then((res) => setPlaylist(res.data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  const addPlaylist = (newPlaylist) => {
    axios
      .post(`${API}/playlists`, newPlaylist)
      .then(
        () => {
          navigate(`/playlists`);
          setTrigger(-trigger);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const updatePlaylist = (updatedPlaylist) => {
    axios
      .put(`${API}/playlists/${id}`, updatedPlaylist)
      .then(() => {
        navigate(`/playlists/${id}`);
        setTrigger(-trigger);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id) {
      addPlaylist(playlist);
    } else {
      updatePlaylist(playlist);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        value={playlist.title}
        onChange={handleTextChange}
        placeholder="your playlist title"
        required
      ></input>
      <label htmlFor="creator">Creator:</label>
      <input
        id="creator"
        type="text"
        value={playlist.creator}
        onChange={handleTextChange}
        placeholder="your name/username"
        required
      ></input>
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        type="text"
        value={playlist.description}
        onChange={handleTextChange}
        placeholder="add a small description"
      ></textarea>
      <label htmlFor="rating">Rating(1-5):</label>
      <input
        id="rating"
        type="number"
        min="0"
        max="5"
        step="1"
        value={playlist.rating}
        onChange={handleTextChange}
      ></input>
      <input type="submit" id="playlist-submit" value="SUBMIT" />
    </form>
  );
}
