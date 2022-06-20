/* eslint-disable react-hooks/exhaustive-deps */
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../../../components/MovieCard";
import ScheduleHome from "../../../components/SchedulesHome";
import AuthService from "../../../services/AuthService";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();

  const [dates, setDates] = useState([]);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      if (currentUser.roles.includes("ROLE_ADMIN")) {
        navigate("/admin/movies");
        // window.location.reload();
      }
    }
  }, []);
  //xu ly phan tu bi lap lai trong mang movies
  function deduplicate(arr) {
    let isExist = (arr, x) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === x.id) return true;
      }
      return false;
    };
    let ans = [];
    arr.forEach((element) => {
      if (!isExist(ans, element)) ans.push(element);
    });
    return ans;
  }

  const onScheduleSelect = (dataMovies, dateSelect) => {
    if (dataMovies[0]) {
      setMovies(deduplicate(dataMovies));
      setDates(dateSelect);
    } else {
      setMovies(null);
    }
  };
  return (
    <div>
      <ScheduleHome onScheduleSelect={onScheduleSelect} />
      <div className="home-container">
        <div className="description">
          <FontAwesomeIcon icon={faCircleInfo} className="home-info-icon" />
          Nhấn vào suất chiếu để tiến hành mua vé
        </div>
      </div>
      {movies ? (
        <div className="movie-list">
          {movies.map((movieNow, index) => {
            return (
              <MovieCard key={index} data={movieNow} dataSchedule={dates} />
            );
          })}
        </div>
      ) : (
        <div className="home-container">Không có lịch chiếu</div>
      )}
    </div>
  );
}

export default Home;
