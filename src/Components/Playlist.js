import { Link } from "react-router-dom";
import { stars } from "../Functions";
import star from "../Assets/star.png";

export default function Playlist({ playlist }) {
  const { title, creator, rating } = playlist;
  return (
    <Link to={`/playlists/${playlist.id}`}>
      <span id="title">{title}</span> by {creator}{" "}
      {rating &&
        stars(rating, star).map((e, i) => (
          <img key={i} src={star} height="18px" />
        ))}
    </Link>
  );
}
