import React, { useEffect, useState } from "react";
import { Button, Table, Badge } from "react-bootstrap";
import Axios from "axios";
const DataOperators = () => {
  const [dataOperators, setDataOperators] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/admin/dataoperators")
      .then((res) => {
        setDataOperators(res.data.operators);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="m-5">
      <h2>Data Admin BayarSekola</h2>
      <hr />
      <Button variant="outline-success" className="mb-3 float-right">
        Tambah Data
      </Button>
      <Table striped bordered hover responsive>
        <thead className="bg-success text-white">
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataOperators.map((values) => {
            return (
              <tr>
                <td>1</td>
                <td>{values.username}</td>
                <td>{values.email}</td>
                <td>
                  <Badge variant="success">{values.is_active}</Badge>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DataOperators;
