import { useContext } from "react";
import { ContextData } from "../Provider/Provider";
import { useNavigate } from "react-router-dom";
import Song from "./Song";

export default function Songs() {
  const navigate = useNavigate();
  const { songs } = useContext(ContextData);

  return (
    <div id="songs">
      <ul>
        {songs &&
          songs.map((song) => (
            <li key={song.id}>
              <Song song={song} />
            </li>
          ))}
      </ul>
      <button onClick={() => navigate("/songs/new")}>Add a Song</button>
    </div>
  );
}
