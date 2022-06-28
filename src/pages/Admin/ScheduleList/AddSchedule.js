import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import ScheduleDataService from "../../../services/ScheduleDataService";
import MovieDataService from "../../../services/MovieDataService";
import RoomDataService from "../../../services/RoomDataService.js";
import SeatDataService from "../../../services/SeatDataService";

function AddSchedule() {
  const [movies, setMovies] = useState([]);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    getAllMovies();
    getAllRooms();
  }, []);
  const getAllMovies = () => {
    MovieDataService.getAll().then((item) => {
      setMovies(item.data);
    });
  };
  const getAllRooms = () => {
    RoomDataService.getAll().then((item) => {
      setRooms(item.data);
    });
  };
  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //thêm
  const [datetime, setDatetime] = useState("");
  const [movie, setMovie] = useState("");
  const [room, setRoom] = useState("");

  async function handleSubmit() {
    const schedule = {
      datetime,
    };
    const scheduleSe = await ScheduleDataService.getPostSchedule(
      movie,
      room,
      schedule
    );
    const rows = ["A", "B", "C", "D", "E"];
    const cols = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
    let scheduleId = scheduleSe.data.id;
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < cols.length; j++) {
        await SeatDataService.createSeatByScheduleId(scheduleId, {
          name: rows[i] + cols[j],
          status: true,
        });
      }
    }
    handleClose();
  }

  return (
    <>
      <Button className="btn-add" variant="primary" onClick={handleShow}>
        Create Schedule
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thêm lịch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group-container">
              <div class="form-group">
                <label for="exampleFormControlInput1">Ngày giờ</label>
                <input
                  class="form-control"
                  placeholder="Nhập ngày giờ"
                  value={datetime}
                  onChange={(e) => setDatetime(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phim</label>
                <select
                  class="form-control"
                  value={movie}
                  onChange={(e) => setMovie(e.target.value)}
                >
                  <option>Chọn tên phim</option>
                  {movies.map((t) => {
                    return <option value={t.id}>{t.name}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="form-group-container">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Phòng</label>
                <select
                  class="form-control"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option>Chọn phòng</option>
                  {rooms.map((t) => {
                    return <option value={t.id}>{t.name}</option>;
                  })}
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddSchedule;
