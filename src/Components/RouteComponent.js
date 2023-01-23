// DEPENDENCIES
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "../Pages/Home";
import SongsIndex from "../Pages/SongsIndex";

// COMPONENTS

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="songs">
          <Route index element={<SongsIndex />} />
        </Route>
      </Route>
    </Routes>
  );
}
