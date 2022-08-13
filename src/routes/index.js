import {AdminLayout} from "../components/Layouts";

import Home from "../pages/User/Home";
import Movie from "../pages/User/Movie";
import Seat from "../pages/User/Seat";
import Checkout from "../pages/User/Checkout";
import Ticket from "../pages/User/Ticket";

import MoviesList from "../pages/Admin/MoviesList";
import ScheduleList from "../pages/Admin/ScheduleList";
import RoomList from "../pages/Admin/RoomList";
import SeatList from "../pages/Admin/SeatList";
import BookingList from "../pages/Admin/BookingList";

import Login from "../pages/Login";
import Register from "../pages/Register";
import NewRoom from "../pages/Admin/RoomList/NewRoom";
import EditRoom from "../pages/Admin/RoomList/EditRoom";
import AdminMoviesList from "../components/AdminMoviesList";
import TheaterList from "../pages/Admin/TheaterList";
import AddTheater from "../pages/Admin/TheaterList/AddTheater";
import UserList from "../pages/Admin/UserList";

const publicRoutes = [
  //User
  {path: "/", component: Home},
  {path: "/movie/:id", component: Movie},
  {path: "/seat/:id", component: Seat},
  {path: "/checkout", component: Checkout},
  {path: "/ticket", component: Ticket},
  {path: "/schedules/:id/seats", component: Seat},

  // auth
  {path: "/login", component: Login, layout: null},
  {path: "/register", component: Register, layout: null},
];

const privateRoutes = [
  {path: "/admin/movies", component: MoviesList, layout: AdminLayout},
  {path: "/admin/movies/post", component: AdminMoviesList},
  {path: "/admin/schedule", component: ScheduleList, layout: AdminLayout},
  {path: "/admin/rooms", component: RoomList, layout: AdminLayout},
  {path: "/admin/schedule/:id/seats", component: SeatList, layout: AdminLayout},
  {path: "/admin/bookings", component: BookingList, layout: AdminLayout},
  {path: "/admin/theaters", component: TheaterList, layout: AdminLayout},
  {path: "/admin/theaters/add", component: AddTheater, layout: AdminLayout},

  {path: "/admin/rooms/add", component: NewRoom, layout: AdminLayout},
  {path: "/admin/rooms/:id", component: EditRoom, layout: AdminLayout},
  {path: "/admin/users", component:UserList, layout: AdminLayout}
];

export {publicRoutes, privateRoutes};
