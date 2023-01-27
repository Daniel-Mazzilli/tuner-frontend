import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Song from "./Song";
import SongForm from "./SongForm";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  let { id } = useParams();

  const handleAdd = (newSong) => {
    axios
      .post(`${API}/playlists/${id}/songs`, newSong)
      .then(
        ({ data }) => {
          setSongs([data, ...songs]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedSong) => {
    axios
      .put(`${API}/playlists/${id}/songs/${updatedSong.id}`, updatedSong)
      .then(({ data }) => {
        const copySongsArray = [...songs];
        const indexUpdatedSong = copySongsArray.findIndex(({ id }) => {
          return id === updatedSong.id;
        });
        copySongsArray[indexUpdatedSong] = data;
        setSongs(copySongsArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/playlists/${id}/songs/${id}`)
      .then(
        (res) => {
          const copySongsArray = [...songs];
          const indexDeletedSong = copySongsArray.findIndex((song) => {
            return song.id === id;
          });
          copySongsArray.splice(indexDeletedSong, 1);
          setSongs(copySongsArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios.get(`${API}/playlists/${id}/songs`).then(({ data }) => {
      setSongs(data);
    });
  }, [id]);
  return (
    <section>
      <div id="songs">
        <div>
          <h3>Songs</h3>
          {songs.map((song) => (
            <Song
              key={song.id}
              song={song}
              handleDelete={handleDelete}
              handleSubmit={handleEdit}
            />
          ))}
        </div>

        <SongForm handleSubmit={handleAdd}>
          <h3>Add a New Song</h3>
        </SongForm>
      </div>
    </section>
  );
}

export default Songs;
