import { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
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
  }, [schedules]);
  //delete
  const deleteSchedule = (id) => {
    ScheduleDataService.getDeleteScheduleById(id).then(() => {
    });
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((t) => {
            return (
              <tr key={t.id}>
                <td></td>
                <td>{t.datetime}</td>
                <td>{t.movie.name}</td>
                <td>{t.room.name}</td>
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
