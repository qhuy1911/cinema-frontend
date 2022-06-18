import { AdminLayout } from "../components/Layouts";
import Home from "../pages/User/Home";
import Movie from "../pages/User/Movie";
import Seat from "../pages/User/Seat";
import Checkout from "../pages/User/Checkout";
import Ticket from "../pages/User/Ticket";
import MoviesList from "../pages/Admin/MoviesList";
import ScheduleList from "../pages/Admin/ScheduleList";
import RoomList from "../pages/Admin/RoomList";
import SeatList from "../pages/Admin/SeatList";

const publicRoutes = [
  //User
  { path: "/", component: Home },
  { path: "/movie/:id", component: Movie },
  { path: "/seat", component: Seat },
  { path: "/checkout", component: Checkout },
  { path: "/ticket", component: Ticket },

  // admin
  { path: "/admin/movies", component: MoviesList, layout: AdminLayout },
  { path: "/admin/schedule", component: ScheduleList, layout: AdminLayout},
  { path: "/admin/rooms", component: RoomList, layout: AdminLayout},
  { path: "/admin/seats", component: SeatList, layout: AdminLayout}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
