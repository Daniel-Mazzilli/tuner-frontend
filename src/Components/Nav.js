import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/songs">
        Songs
      </Link>
    </nav>
  );
}