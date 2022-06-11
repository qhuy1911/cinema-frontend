import { AdminLayout } from "../components/Layouts";
import Home from "../pages/Home";
import MoviesList from "../pages/MoviesList";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/movies", component: MoviesList, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
