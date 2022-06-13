import { AdminLayout } from "../components/Layouts";
import Home from "../pages/User/Home";
import Movie from "../pages/User/Movie";
import Seat from "../pages/User/Seat";
import Checkout from "../pages/User/Checkout";
import Ticket from "../pages/User/Ticket";
import MoviesList from "../pages/Admin/MoviesList";

const publicRoutes = [
  //User
  { path: "/", component: Home },
  { path: "/movie", component: Movie },
  { path: "/seat", component: Seat },
  { path: "/checkout", component: Checkout },
  { path: "/ticket", component: Ticket },

  // admin
  { path: "/movies", component: MoviesList, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
