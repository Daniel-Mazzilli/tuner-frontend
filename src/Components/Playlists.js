import { useContext } from "react";
import { ContextData } from "../Provider/Provider";
import { useNavigate } from "react-router-dom";
import Playlist from "./Playlist";

export default function Playlists() {
  const navigate = useNavigate();
  const { playlists } = useContext(ContextData);

  return (
    <div id="playlists">
      <button onClick={() => navigate("/playlists/new")}>
        Create a playlist
      </button>
      <ul>
        {playlists &&
          playlists.map((playlist) => (
            <li key={playlist.id}>
              <Playlist playlist={playlist} />
            </li>
          ))}
      </ul>
    </div>
  );
}
