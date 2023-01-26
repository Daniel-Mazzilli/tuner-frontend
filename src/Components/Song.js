import { useState } from "react";
import SongForm from "./SongForm";

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
            {name} by {artist}, album: {album}, length: {time}, favorite:
            {String(is_favorite)}
          </p>
          <button onClick={toggleView}>edit this song</button>
          <button onClick={() => handleDelete(song.id)}>delete</button>
        </>
      )}
    </div>
  );
}

export default Song;
