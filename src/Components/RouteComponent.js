// DEPENDENCIES
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "../Pages/Home";
import Index from "../Pages/Index";
import Show from "../Pages/Show";
import Form from "../Pages/Form";

// COMPONENTS

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="songs">
          <Route index element={<Index />} />
          <Route path=":id">
            <Route index element={<Show />} />
          </Route>
          <Route path="new" element={<Form />} />
        </Route>
      </Route>
    </Routes>
  );
}
