import "./Movie.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieDataService from "../../../services/MovieDataService";
import { faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";

function Movie() {
  let { id } = useParams();
  const [movie, setMoive] = useState({});
  const getMovieId = (id) => {
    MovieDataService.getMovie(id).then((res) => setMoive(res.data));
  };
  useEffect(() => {
    getMovieId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(id);
  console.log(movie);
  return (
    <>
      {movie.id === id ? (
        <div className="movie_flex">
          <div className="movie_imgage">
            <img
              src={require(`../../../assets/images/${movie.image}`)}
              alt="Not found"
            />
          </div>
          <div className="movie_info">
            <h2 className="movie_title">{movie.name}</h2>
            <div className="movie_director">
              <span>
                Đạo diễn:{" "}
                <span style={{ color: "#e63757" }}>{movie.director}</span>
              </span>
            </div>
            <p className="movie_description">{movie.description}</p>
            <div className="info_time">
              <div className="info-startDate">
                <p>Khởi chiếu </p>
                <p>
                  <FontAwesomeIcon icon={faCalendar} /> {movie.startDate}
                </p>
              </div>
              <div className="info-duration">
                <span>Thời lượng</span>
                <p>
                  <FontAwesomeIcon icon={faClock} /> {movie.duration} phút
                </p>
              </div>
            </div>
          </div>
          <button className="movie_button">Đặt vé</button>
        </div>
      ) : null}
      <h3 style={{ color: "#e63757" }}>Video Trailer</h3>
      <iframe
        className="movie_trailer"
        src={`https://www.youtube.com/embed/${movie.trailer}`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
    </>
  );
}
export default Movie;
