import { Link } from "react-router-dom";

export default function Playlist({ playlist }) {
  const { title, creator, rating } = playlist;
  return (
    <Link to={`/playlists/${playlist.id}`}>
      {title} by {creator} - Rating: {rating}
    </Link>
  );
}
