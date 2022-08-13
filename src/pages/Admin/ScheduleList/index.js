import {useEffect, useState} from "react";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";
import "./ScheduleList.css";

import AddSchedule from "./AddSchedule";

import ScheduleDataService from "../../../services/ScheduleDataService";

function ScheduleList() {
  //data
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    ScheduleDataService.getAll().then((item) => {
      setSchedules(item.data);
    });
  }, []);
  //delete
  const deleteSchedule = (id) => {
    ScheduleDataService.getDeleteScheduleById(id).then(() => {});
  };
  return (
    <div className="movie-list-wrapper">
      <h2>Schedule List</h2>
      {/* Modal */}
      <AddSchedule />
      {/* Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>DateTime</th>
            <th>Movie</th>
            <th>Room</th>
            <th>Seat List</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedules &&
            schedules.map((t) => {
              return (
                <tr key={t.id}>
                  <td></td>
                  <td>{t.datetime}</td>
                  <td>{t.movie.name}</td>
                  <td>{t.room.name}</td>
                  <td>
                    <Link to={`/admin/schedule/${t.id}/seats`}>Xem</Link>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => deleteSchedule(t.id)}
                      icon={faTrash}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
export default ScheduleList;
