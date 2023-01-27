import { Link } from "react-router-dom";
import logo from "../Assets/music-icon.png";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <img id="logo" src={logo} height="70px"/>
      </Link>
      <Link to="/playlists">Playlists</Link>
    </nav>
  );
}
