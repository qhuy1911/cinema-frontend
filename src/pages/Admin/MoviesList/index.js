import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieList.css";

function MoviesList() {
  return (
    <div className="movie-list-wrapper">
      <h2>Movie List</h2>
      <Link className="btn-add" to={"/"}>
        Create New Movie
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <FontAwesomeIcon icon={faTrash} />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <FontAwesomeIcon icon={faTrash} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MoviesList;
