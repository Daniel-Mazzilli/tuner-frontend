import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextData } from "../Provider/Provider";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function SongForm() {
  const { id } = useParams();
  const { setTrigger, trigger } = useContext(ContextData);
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`${API}/songs/${id}`)
        .then((res) => setSong(res.data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`);
          setTrigger(-trigger);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(() => {
        navigate(`/songs/${id}`);
        setTrigger(-trigger);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id) {
      addSong(song);
    } else {
      updateSong(song);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={song.name}
        onChange={handleTextChange}
        placeholder="name of song"
        required
      ></input>
      <label htmlFor="artist">Artist:</label>
      <input
        id="artist"
        type="text"
        value={song.artist}
        onChange={handleTextChange}
        placeholder="name of artist"
        required
      ></input>
      <label htmlFor="album">Album:</label>
      <input
        id="album"
        type="text"
        value={song.album}
        onChange={handleTextChange}
        placeholder="name of album"
      ></input>
      <label htmlFor="time">Length:</label>
      <input
        id="time"
        type="text"
        value={song.time}
        onChange={handleTextChange}
        placeholder="length of song"
      ></input>
      <label htmlFor="is_favorite">Favorite:</label>
      <input
        id="is_favorite"
        type="checkbox"
        checked={song.is_favorite}
        onChange={handleCheckboxChange}
      />
      <input type="submit" />
    </form>
  );
}
