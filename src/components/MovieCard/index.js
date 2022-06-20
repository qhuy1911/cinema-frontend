import React, { useEffect, useState } from "react";
import ScheduleDataService from "../../services/ScheduleDataService";
import "./MovieCard.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function MovieCard({ data }) {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    console.log(data.id);
    if (data.id) {
      getAllScheduleByMovie(data.id);
    }
  }, [data.id]);

  const getAllScheduleByMovie = (MovieId) => {
    ScheduleDataService.getAllByMovieId(MovieId)
      .then((res) => {
        setSchedules(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  const convertStringToDate = (str) => {
    const datetime = str.split(" ");
    console.log(datetime);
    const dates = datetime[0].split("/");
    const times = datetime[1].split(":");
    //  19/11/2022 8:00
    // dates= [19,11,2022]
    // times =[8,0]
    return new Date(dates[2], dates[1], dates[0], times[0], times[1]);
  };
  return (
    <div className="home-container">
      <div className="movie-card movie-card-body">
        <img src={require(`../../assets/images/${data.image}`)} alt="" />
        <div className="home-movie-info">
          <Link to={`/movie/${data.id}`}>
            <h4 className="home-movie-info-name">{data.name}</h4>
          </Link>
          <span className="home-movie-duration text-muted">
            {data.duration} phút
          </span>
          <Link to={`/movie/${data.id}`}>
            <a href="/"> trailer</a>
          </Link>
          <h4> 2D Phụ đề tiếng Việt</h4>
          {schedules ? (
            <div className="home-movie-time">
              {schedules.map((scheduleData) => {
                const schedule = convertStringToDate(scheduleData.datetime);
                console.log(schedule);
                const hours = schedule.getHours();
                const minutes = schedule.getMinutes();

                if (nowDate.getTime() > schedule.getTime()) {
                  return (
                    <div
                      key={scheduleData.id}
                      className="home-movie-time items-time disabled"
                    >
                      {hours}:{minutes < 10 ? "0" + minutes : minutes}
                    </div>
                  );
                } else {
                  return (
                    <Link
                      to={`/schedules/${scheduleData.id}/seats`}
                      className="navLink"
                      key={scheduleData.id}
                    >
                      <div className="home-movie-time items-time ">
                        {hours}:{minutes < 10 ? "0" + minutes : minutes}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          ) : (
            <div>Khong co lich chiếu</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
