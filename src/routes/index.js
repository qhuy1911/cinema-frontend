import { AdminLayout } from "../components/Layouts";
import Home from "../pages/User/Home";
import Movie from "../pages/User/Movie";
import Seat from "../pages/User/Seat";
import Checkout from "../pages/User/Checkout";
import Ticket from "../pages/User/Ticket";
import MoviesList from "../pages/Admin/MoviesList";
import Login from "../pages/Login";
import Register from "../pages/Register";

const publicRoutes = [
  //User
  { path: "/", component: Home },
  { path: "/movie/:id", component: Movie },
  { path: "/seat", component: Seat },
  { path: "/checkout", component: Checkout },
  { path: "/ticket", component: Ticket },
  { path: "/schedules/:id/seats", component: Seat },

  // auth
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
];

const privateRoutes = [
  { path: "/movies", component: MoviesList, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };
