import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import RoomDataService from "../../../services/RoomDataService";
import "./RoomList.css";

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getAllRoom();
  });

  const getAllRoom = () => {
    RoomDataService.getAll().then((res) => setRooms(res.data));
  };

  const handleRemove = (id) => {
    RoomDataService.remove(id).then((res) => {
      getAllRoom();
    });
    alert("you have successfully deleted");
  };

  return (
    <div className="movie-list-wrapper">
      <h2>Room List</h2>
      <Link className="btn-add" to={"/admin/rooms/add"}>
        Create New Room
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name room</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms ? (
            rooms.map((room) => {
              return (
                <tr key={room.id}>
                  <td></td>
                  <td>{room.name}</td>
                  <td>{room.status ? "Trống" : "Đã Đặt"}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="delete-action"
                      onClick={() => handleRemove(room.id)}
                    />
                    <Link to={`/admin/rooms/${room.id}`}>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="edit-action"
                      />
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="empty-table">Không có phòng</div>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default RoomList;
