import { useState } from "react";
import SongForm from "./SongForm";
import star from "../Assets/star.png";

function Song({ song, handleDelete, handleSubmit }) {
  const { name, artist, album, time, is_favorite } = song;
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };
  return (
    <div className="Song">
      {viewEditForm ? (
        <SongForm
          songDetails={song}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <p>
            <span className="bold">{artist}</span> -
            <span className="bold"> {name}</span> // {time} {is_favorite && <img src={star} height="22px" />}
          </p>
          <p>
            From the album: <span className="bold">{album}</span>
            
          </p>
          <div id="song-buttons">
          <button onClick={toggleView}>Edit this song</button>
          <button onClick={() => handleDelete(song.id)}>Delete</button></div>
        </>
      )}
    </div>
  );
}

export default Song;
