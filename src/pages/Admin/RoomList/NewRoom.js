import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./RoomList.css";
import RoomDataService from "../../../services/RoomDataService";

function NewRoom() {
  const [name, setName] = useState("");

  const [validated, setValidated] = useState(false);

  let navigate = useNavigate();

  const handleAddRoom = () => {
    const room = {
      name: name,
      status: true,
    };

    RoomDataService.createRoom(room).then((res) => {
      console.log("successfully add room");
    });
    alert(`You successfully added room name ${name} `);
    navigate("/admin/rooms");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (name) {
      handleAddRoom();
    }
  };
  return (
    <div className="movie-list-wrapper">
      <h2>New Room</h2>
      <div className="form-room-warapper">
        <div className="form-room-container">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="form-room"
          >
            <Form.Label>Room name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg: 01"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="block-btn">
              <button className="btn-add btn-form-room">Create</button>
              <Link to={"/admin/rooms"} className="navLink">
                <button className="btn-add btn-form-room">Cancel</button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewRoom;
