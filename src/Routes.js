import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "utils/constants";
import {
  Home,
} from "pages";

const MayhavenRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />

      </Routes>
    </Router>
  );
};

export default MayhavenRoutes;
