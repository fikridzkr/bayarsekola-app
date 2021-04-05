import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ShowModal from "../ShowModal";
const DataStudents = () => {
  const [dataSiswa, setDataSiswa] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/admin/student")
      .then((res) => {
        setDataSiswa(res.data.siswa);
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
      <Button variant="outline-success" className="mb-3 float-right">
        Tambah Data
      </Button>
      <Table striped bordered hover responsive>
        <thead className="bg-success text-white">
          <tr>
            <th>No</th>
            <th>Nis</th>
            <th>Foto</th>
            <th>Nama Siswa</th>
            <th>Kelas</th>
            <th>Jurusan</th>
            <th>Jenis Kelamin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((values, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{values.nis}</td>
                <td>
                  <img src={`/cache/${values.foto}`} alt="pict" width="100px" />
                </td>
                <td>{values.nama}</td>
                <td>{values.kelas}</td>
                <td>{values.jurusan}</td>
                <td>{values.jenis_kelamin}</td>
                <td>
                  {" "}
                  <ShowModal />{" "}
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

export default DataStudents;
