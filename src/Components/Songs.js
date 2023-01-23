import { useContext } from "react";
import { ContextData } from "../Provider/Provider";
import Song from "./Song";

export default function Songs() {
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
    </div>
  );
}
