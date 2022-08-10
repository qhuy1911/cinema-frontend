import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieDataService from "../../../services/MovieDataService";
import "./MovieList.css";

function MoviesList() {
  const [movies, setMoives] = useState([])

  useEffect(() => {
    getAllMovies();

  }, [])
  const getAllMovies = () => {
    MovieDataService.getAll().then((movie) => {
      setMoives(movie.data)

    })
  }
  const handleDelete = (id) => {
    MovieDataService.deleteMovie(id)
      .then((res) => {
        getAllMovies();

      })
  }


  return (
    <div className="movie-list-wrapper">
      <h2>Movie List</h2>
      <Link className="btn-add" to={"/admin/movies/post"}>
        Create New Movie
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Director</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Image</th>
            <th>Start-date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movi => {
            return (
              <tr key={movi.id}>
                <td>{movi.id}</td>
                <td>{movi.name}</td>
                <td>{movi.director}</td>
                <td>{movi.description}</td>
                <td>{movi.duration}</td>
                <td>{movi.image}</td>
                <td>{movi.startDate}</td>
                <td>
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(movi.id)}
                  />
                </td>

              </tr>

            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default MoviesList;
