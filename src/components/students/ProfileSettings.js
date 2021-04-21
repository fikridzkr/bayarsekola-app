import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const ProfileSettings = ({ user_id }) => {
  const idUser = user_id;
  const [nis, setNis] = useState();
  const [nama, setNama] = useState();
  const [kelas, setKelas] = useState();
  const [jurusan, setJurusan] = useState();
  const [jenisKelamin, setJenisKelamin] = useState();
  const [newPassword, setNewPassword] = useState();
  const [getKelas, setGetKelas] = useState([]);
  let history = useHistory();
  const getDataStudent = () => {
    Axios.post("http://localhost:3001/student", {
      user_id: idUser,
    })
      .then((res) => {
        setNis(res.data.dataUser[0].nis);
        setNama(res.data.dataUser[0].nama);
        setKelas(res.data.dataUser[0].id_kelas);
        setJurusan(res.data.dataUser[0].jurusan);
        setJenisKelamin(res.data.dataUser[0].jenis_kelamin);
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
      nis: nis,
      nama: nama,
      kelas: kelas,
      jurusan: jurusan,
      jenis_kelamin: jenisKelamin,
    })
      .then(handleSubmit())
      .catch((err) => {
        console.log(err);
      });
  };

  // redirect pages
  function handleSubmit() {
    swal({
      title: "Your Data is Update",
      text: "You will be directed to the dashboard!",
      icon: "success",
      button: "Okay",
    }).then(() => {
      history.push("/dashboard");
    });
  }

  const changePassword = () => {
    Axios.put("http://localhost:3001/changepassword", {
      user_id: idUser,
      newPassword: newPassword,
    })
      .then((res) => console.log(res))
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
              <Form.Group className="mt-3">
                <Form.Label>Nis</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={nis}
                  name="nis"
                  onChange={(event) => setNis(event.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={nama}
                  name="nama"
                  onChange={(event) => setNama(event.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <label for="kelas">Choose a Class</label>
                <select
                  name="kelas"
                  id="kelas"
                  className="form-control"
                  value={kelas}
                  onChange={(event) => setKelas(event.target.value)}
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
                  value={jurusan}
                  className="form-control"
                  onChange={(event) => setJurusan(event.target.value)}
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
                  value={jenisKelamin}
                  className="form-control"
                  onChange={(event) => setJenisKelamin(event.target.value)}
                >
                  <option value="Laki - Laki">Male</option>
                  <option value="Perempuam">Female</option>
                </select>
              </Form.Group>
              <Button
                variant="outline-success"
                onClick={() => {
                  updateProfile();
                }}
              >
                {" "}
                Update Profile{" "}
              </Button>
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
                  onChange={(event) => setNewPassword(event.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your password with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="danger" onClick={() => changePassword()}>
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
