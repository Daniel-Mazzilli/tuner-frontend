import { Link } from "react-router-dom";
import star from "../Assets/star.png";

const stars = (rating) => {
  const starsArr = [];
  let counter = rating;
  while (counter > 0) {
    starsArr.push(counter);
    counter--;
  }
  return starsArr;
};

export default function Playlist({ playlist }) {
  const { title, creator, rating } = playlist;
  return (
    <Link to={`/playlists/${playlist.id}`}>
      <span id="title">{title}</span> by {creator}{" "}
      {rating && stars(rating, star).map((e, i) => <img key={i} src={star} height="18px" />)}
    </Link>
  );
}
