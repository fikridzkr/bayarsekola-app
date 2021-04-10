import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Button, Col, Row, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ProfileSettings = ({ user_id }) => {
  const idUser = user_id;
  const [foto, setFoto] = useState();
  const [nis, setNis] = useState();
  const [nama, setNama] = useState();

  const [newFoto, setNewFoto] = useState();
  const [newNis, setNewNis] = useState();
  const [newNama, setNewNama] = useState();
  const [newKelas, setNewKelas] = useState();
  const [newJurusan, setNewJurusan] = useState();
  const [newJenisKelamin, setNewJenisKelamin] = useState();

  const [getKelas, setGetKelas] = useState([]);
  let history = useHistory();

  const getDataStudent = () => {
    Axios.post("http://localhost:3001/student", {
      user_id: idUser,
    })
      .then((res) => {
        setFoto(res.data.dataUser[0].foto);
        setNis(res.data.dataUser[0].nis);
        setNama(res.data.dataUser[0].nama);
        console.log(res.data.dataUser[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataKelas = () => {
    Axios.get("http://localhost:3001/kelas")
      .then((res) => {
        setGetKelas(res.data.kelas);
        console.log(res.data.kelas);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProfile = () => {
    Axios.put("http://localhost:3001/student/update", {
      user_id: idUser,
      foto: newFoto,
      nis: newNis,
      nama: newNama,
      kelas: newKelas,
      jurusan: newJurusan,
      jenis_kelamin: newJenisKelamin,
    })
      .then((res) => {
        history.push("/dashboard");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDataStudent();
    getDataKelas();
  }, []);
  return (
    <Container>
      <Container className="mt-3">
        <h1>Profile Settings</h1>
        <hr />
        <Card className="mb-3">
          <Card.Body>
            <h3>Update Profile</h3>
            <hr />
            <Form>
              <Row>
                <Col md={3}>
                  <img src={`/cache/${foto}`} alt="profile" width="90px" />
                </Col>
                <Col md={9}>
                  <Form.Group>
                    <Form.File
                      label="Upload profile baru anda"
                      onChange={(event) => setNewFoto(event.target.files[0])}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mt-3">
                <Form.Label>Nis</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={nis}
                  onChange={(event) => setNewNis(event.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={nama}
                  onChange={(event) => setNewNama(event.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <label for="kelas">Choose a Class</label>
                <select
                  name="kelas"
                  id="kelas"
                  className="form-control"
                  onChange={(event) => setNewKelas(event.target.value)}
                >
                  {getKelas.map((values, index) => {
                    return (
                      <option value={values.id} key={index}>
                        {values.kelas}
                      </option>
                    );
                  })}
                </select>
              </Form.Group>
              <Form.Group>
                <label for="jurusan">Choose a Major</label>
                <select
                  name="jurusan"
                  className="form-control"
                  onChange={(event) => setNewJurusan(event.target.value)}
                >
                  <option value="Rekayasa Perangkat Lunak">
                    Rekayasa Perangkat Lunak
                  </option>
                  <option value="Kimia Analis">Kimia Analis</option>
                  <option value="Perbankan">Perbankan</option>
                  <option value="Teknik Elektronika Industri">
                    Teknik Elektronika Industri
                  </option>
                </select>
              </Form.Group>

              <Form.Group>
                <label for="jenis_kelamin">Choose Gender</label>
                <select
                  name="jenis_kelamin"
                  className="form-control"
                  onChange={(event) => setNewJenisKelamin(event.target.value)}
                >
                  <option value="Laki - Laki">Male</option>
                  <option value="Perempuam">Female</option>
                </select>
              </Form.Group>
              <Button variant="outline-success"> Update Profile </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3>Change Password</h3>
            <hr />
            <Form>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  className="col-md-6"
                />
                <Form.Text className="text-muted">
                  We'll never share your password with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="danger" type="submit" onSubmit={updateProfile()}>
                Change Password
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default ProfileSettings;
