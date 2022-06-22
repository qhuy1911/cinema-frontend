import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import RoomDataService from "../../../services/RoomDataService";

function EditRoom() {
  let { id } = useParams();

  let navigate = useNavigate();

  const [room, setRoom] = useState(null);

  useEffect(() => {
    console.log(id);
    if (id) {
      getRoom(id);
    }
  }, [id]);

  const getRoom = (id) => {
    RoomDataService.getRoom(id)
      .then((res) => {
        setRoom(res.data);
      })
      .catch((e) => console.log(e));
  };
  //onChange props
  const onChangeName = (e) => {
    setRoom({
      ...room,
      name: e.target.value,
    });
  };

  const handleUpdateRoom = () => {
    RoomDataService.updateRoom(id, room).then((res) => {
      console.log("update successful!");
    });
    alert("Room name update successful!");
    navigate("/admin/rooms");
  };
  return (
    <>
      {room ? (
        <div className="movie-list-wrapper">
          <h2>Edit Room </h2>
          <div className="form-room-warapper">
            <div className="form-room-container">
              <Form className="form-room">
                <Form.Label>Room name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg: 01"
                  value={room.name}
                  onChange={onChangeName}
                />
                <button
                  className="btn-add btn-form-room"
                  onClick={handleUpdateRoom}
                >
                  Update
                </button>
                <Link to={"/admin/rooms"}>
                  <button className="btn-add btn-form-room">Cancel</button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default EditRoom;
