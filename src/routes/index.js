import { AdminLayout } from "../components/Layouts";
import Home from "../pages/User/Home";
import MoviesList from "../pages/Admin/MoviesList";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/movies", component: MoviesList, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
