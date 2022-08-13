import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import UserService from "../../../services/UserService";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState();

  useEffect(() => {
    getAllUser();
  }, []);
  const getAllUser = () => {
    UserService.getAllUser().then((res) => setUsers(res.data));
  };
  return (
    <div className="movie-list-wrapper">
      <h2>User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone </th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((users) => (
              <tr key={users.id}>
                <td></td>
                <td>{users.username}</td>
                <td>{users.fullName}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>{users.address}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
