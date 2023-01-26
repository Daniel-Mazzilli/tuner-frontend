import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SongForm(props) {
  let { id } = useParams();
  const { songDetails } = props;

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
    playlist_id: id,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    if (songDetails) {
      setSong(songDetails);
    }
  }, [id, songDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(song, id);
    if (songDetails) {
      props.toggleView();
    }
    setSong({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: false,
      playlist_id: id,
    });
  };
  return (
    <div className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="type song name"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          onChange={handleTextChange}
          placeholder="type artist name"
          required
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          value={song.album}
          onChange={handleTextChange}
          placeholder="type album name"
        />
        <label htmlFor="time">length:</label>
        <input
          id="time"
          type="text"
          value={song.time}
          placeholder="song length"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          checked={song.is_favorite}
          onChange={handleCheckboxChange}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default SongForm;
