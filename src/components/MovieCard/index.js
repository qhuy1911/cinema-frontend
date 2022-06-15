import React from "react";
import "./MovieCard.css";

function MovieCard({ data }) {
  const schedules = [
    {
      id: 1,
      datetime: new Date(2022, 11, 21, 8),
    },
    {
      id: 2,
      datetime: new Date(2022, 11, 21, 9, 10),
    },
    {
      id: 3,
      datetime: new Date(2022, 11, 21, 9, 10),
    },
    {
      id: 4,
      datetime: new Date(2022, 11, 21, 9, 10),
    },
    {
      id: 5,
      datetime: new Date(2022, 11, 21, 9, 10),
    },
    {
      id: 6,
      datetime: new Date(2022, 11, 21, 9, 10),
    },
    {
      id: 8,
      datetime: new Date(2022, 11, 21, 9, 10),
    },
    {
      id: 9,
      datetime: new Date(2022, 11, 21, 9, 10),
    },
    {
      id: 10,
      datetime: new Date(2022, 11, 21, 9, 10),
    },
    {
      id: 11,
      datetime: new Date(2022, 11, 21, 9, 10),
    },
  ];
  return (
    <div className="home-container">
      <div className="movie-card movie-card-body">
        <img src={data.image} alt={data.image}></img>
        <div className="home-movie-info">
          <h4 className="home-movie-info-name">{data.name}</h4>
          <span className="home-movie-duration text-muted">
            {data.duration} phút
          </span>
          <a href="/"> trailer</a>
          <h4> 2D Phụ đề tiếng Việt</h4>
          <div className="home-movie-time">
            {schedules.map((schedule) => {
              const hours = schedule.datetime.getHours();
              const minutes = schedule.datetime.getMinutes();
              return (
                <div key={schedule.id} className="home-movie-time items-time">
                  {hours}:{minutes < 10 ? "0" + minutes : minutes}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
