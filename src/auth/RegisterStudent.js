import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const RegisterStudent = ({ user, user_id }) => {
  const [kelas, setKelas] = useState([]);
  let history = useHistory();
  // validation here
  const validate = Yup.object({
    nis: Yup.number()
      .min(6, "Nis must be at least 5 characters")
      .required("Nis is required"),
    nama: Yup.string()
      .min(5, "Name must be at least 5 characters")
      .required("Name is required"),
  });

  // redirect pages
  function handleClick() {
    swal({
      title: "Register your personal data is complete",
      text: "You will be directed to dashboard!",
      icon: "success",
      button: "Okay",
    }).then(() => {
      history.push("/dashboard/bills");
    });
  }
  useEffect(() => {
    Axios.get("http://localhost:3001/kelas")
      .then((res) => {
        const dataKelas = res.data.kelas;
        setKelas(dataKelas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Formik
      initialValues={{
        is_active: "yes",
        user_id: user_id,
        foto: null,
        nis: "",
        nama: "",
        kelas: null,
        jurusan: "Rekayasa Perangkat Lunak",
        jenis_kelamin: "Laki - Laki",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        let data = new FormData();
        data.append("is_active", values.is_active);
        data.append("user_id", values.user_id);
        data.append("foto", values.foto);
        data.append("nis", values.nis);
        data.append("nama", values.nama);
        data.append("kelas", values.kelas);
        data.append("jurusan", values.jurusan);
        data.append("jenis_kelamin", values.jenis_kelamin);
        Axios.post("http://localhost:3001/datastudent", data)
          .then((res) => {
            console.log(res);
            handleClick();
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {(formik) => (
        <>
          <Container className=" mt-3">
            <Card className="shadow-sm mx-auto" style={{ width: "50%" }}>
              <Card.Body>
                <h2 className="text-center">{`Hello, ${user}`}</h2>
                <p className="text-secondary text-center">
                  Before using this application <br />
                  please complete your data
                </p>
                <Form>
                  <input
                    label="Upload Your Picture"
                    type="file"
                    name="foto"
                    onChange={(event) =>
                      formik.setFieldValue("foto", event.target.files[0])
                    }
                  />
                  <TextField
                    label="Nis"
                    type="number"
                    placeholder="Enter Your Nis"
                    name="nis"
                  />
                  <TextField
                    label="Name"
                    type="text"
                    placeholder="Enter Your Name"
                    name="nama"
                  />
                  <div className="mb-3">
                    <label for="kelas">Choose a Kelas</label>
                    <Field as="select" name="kelas" className="form-control">
                      {kelas.map((values, index) => {
                        return (
                          <option value={values.id} key={index}>
                            {values.kelas}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                  <div className="mb-3">
                    <label for="jurusan">Choose a Jurusan</label>
                    <Field as="select" name="jurusan" className="form-control">
                      <option value="Rekayasa Perangkat Lunak">
                        Rekayasa Perangkat Lunak
                      </option>
                      <option value="Kimia Analis">Kimia Analis</option>
                      <option value="Perbankan">Perbankan</option>
                      <option value="Teknik Elektronika Industri">
                        Teknik Elektronika Industri
                      </option>
                    </Field>
                  </div>

                  <div className="mb-3">
                    <label for="jenis_kelamin">Choose Gender</label>
                    <Field
                      as="select"
                      name="jenis_kelamin"
                      className="form-control"
                    >
                      <option value="Laki - Laki">Male</option>
                      <option value="Perempuam">Female</option>
                    </Field>
                  </div>
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </>
      )}
    </Formik>
  );
};

export default RegisterStudent;
