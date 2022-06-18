import React, { useEffect, useState } from "react";
import ScheduleDataService from "../../services/ScheduleDataService";
import { convertStringToDate } from "../MovieCard";
import "./SchedulesHome.css";

function ScheduleHome(props) {
  const [active, setActive] = useState();
  const now = new Date();
  const dates = [];

  const [schedules, setSchedules] = useState([]);

  for (let i = 0; i < 7; i++) {
    const item = new Date(now.getTime() + 24 * 60 * 60 * 1000 * i);
    dates.push(item);
  }
  const weekday = ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"];

  useEffect(() => {
    getAllSchedule();
  }, []);

  const getAllSchedule = () => {
    ScheduleDataService.getAll()
      .then((res) => {
        setSchedules(res.data);
      })
      .catch((e) => console.log(e));
  };
  const handleShowMovies = (index, date) => {
    const movies = [];
    const dateSelect = [];

    setActive(index);
    for (let i = 0; i < schedules.length; i++) {
      const formatDate = convertStringToDate(schedules[i].datetime);
      if (
        formatDate.getDate() === date.getDate() &&
        formatDate.getMonth() === date.getMonth()
      ) {
        movies.push(schedules[i].movie);
        dateSelect.push(schedules[i]);
      }
    }
    props.onScheduleSelect(movies, dateSelect);
  };

  return (
    <div className="home-container">
      <div className="home-schedules">
        {dates.map((date, index) => {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const dayOfWeek = weekday[date.getDay()];
          return (
            <span
              key={index}
              onClick={() => handleShowMovies(index, date)}
              className={`home-container text-muted home-date ${
                active === index ? "active" : ""
              }`}
            >
              <span>
                {day}/{month}
                <br />
                <span>{dayOfWeek}</span>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ScheduleHome;
