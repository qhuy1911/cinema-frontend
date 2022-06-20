/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export const convertStringToDate = (str) => {
  const datetime = str.split(" ");
  const dates = datetime[0].split("/");
  const times = datetime[1].split(":");
  //  19/11/2022 8:00
  // dates= [19,11,2022]
  // times =[8,0]
  return new Date(dates[2], dates[1] - 1, dates[0], times[0], times[1]);
};
function MovieCard({ data, dataSchedule }) {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    if (data.id) {
      handleDateTime(data.id);
    }
  }, [data.id]);

  const handleDateTime = (id) => {
    const dateTime = [];
    dataSchedule.forEach((element) => {
      if (element.movie.id === id) {
        dateTime.push(element);
      }
    });
    setSchedules(dateTime);
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
          <Link to={`/movie/${data.id}`}>trailer</Link>
          <p> 2D Phụ đề tiếng Việt</p>
          {schedules ? (
            <div className="home-movie-time">
              {schedules.map((scheduleData) => {
                //lay ngay gio hien tai
                const nowDate = new Date();
                // get nay gio trong mang schedule
                const schedule = convertStringToDate(scheduleData.datetime);
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
                    <Link to={"/"} className="navLink" key={scheduleData.id}>
                      <div className="home-movie-time items-time ">
                        {hours}:{minutes < 10 ? "0" + minutes : minutes}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          ) : (
            <div> Không có lịch chiếu </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
