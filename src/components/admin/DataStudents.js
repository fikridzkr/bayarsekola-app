import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
const DataStudents = () => {
  const [dataSiswa, setDataSiswa] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/admin/student")
      .then((res) => {
        setDataSiswa(res.data.siswa);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(dataSiswa);
  return (
    <div className="m-5">
      <h2>Data Siswa SMK Negeri 5 Kota Bekasi</h2>
      <hr />
      <Table striped bordered hover responsive>
        <thead className="bg-success text-white">
          <tr>
            <th>No</th>
            <th>Nis</th>
            <th>Nama Siswa</th>
            <th>Kelas</th>
            <th>Jurusan</th>
            <th>Jenis Kelamin</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((values, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{values.nis}</td>
                <td>{values.nama}</td>
                <td>{values.kelas}</td>
                <td>{values.jurusan}</td>
                <td>{values.jenis_kelamin}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DataStudents;
