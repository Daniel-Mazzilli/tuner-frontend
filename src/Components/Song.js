import { Link } from "react-router-dom";

export default function Song({ song }) {
    return (
        <Link to={`/songs/${song.id}`}>
        {song.name} by {song.artist} - length: {song.time} - Favorite: {String(song.is_favorite)}
        </Link>
    )
}