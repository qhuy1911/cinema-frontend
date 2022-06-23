/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import SeatDataService from "../../../services/SeatDataService";

function NewSeat() {
  // let { id } = useParams();
  const id = 1;
  const [name, setName] = useState("");
  const [validated, setValidated] = useState(false);

  let navigate = useNavigate();

  const handleAddSeat = () => {
    const seat = {
      name: name,
      status: true,
    };
    console.log(seat, id);
    SeatDataService.createSeatByScheduleId(id, seat).then((res) => {
      console.log("successfully add seat");
    });
    alert(`You successfully added seat name ${name} `);
    navigate("/admin/seats");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (name) {
      handleAddSeat();
    }
  };

  return (
    <div className="movie-list-wrapper">
      <h2>New Seat</h2>
      <div className="form-room-warapper">
        <div className="form-room-container">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="form-room"
          >
            <Form.Label>Seat name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg: A01"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn-add btn-form-room">Create</button>
            <Link to={"/admin/seats "}>
              <button className="btn-add btn-form-room">Cancel</button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewSeat;
