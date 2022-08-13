import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";

import TheaterServices from "../../../services/TheaterServices";
import "./TheaterList.css";

function TheaterList() {
  const [theaters, setTheaters] = useState();

  useEffect(() => {
    getAllTheaters();
  }, []);

  const getAllTheaters = () => {
    TheaterServices.getAll().then((res) => {
      setTheaters(res.data);
    });
  };

  return (
    <div className="movie-list-wrapper">
      <h2>Theater List</h2>
      <Link className="btn-add" to={"/admin/theaters/add"}>
        Create New Theater
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Address</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {theaters &&
            theaters.map((theater) => (
              <tr key={theater.id}>
                <td></td>
                <td>{theater.address}</td>
                <td>{theater.name}</td>
                {/* <td>
                  <img src={theater.image} alt="a" />
                </td> */}
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TheaterList;
