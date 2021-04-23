import React, { useEffect, useState } from "react";
import { Button, Table, Badge, Modal } from "react-bootstrap";
import Axios from "axios";
import { TextField } from "../TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
const DataOperators = () => {
  const [dataOperators, setDataOperators] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  // validation here
  const validate = Yup.object({
    username: Yup.string()
      .min(5, "Username must be at least 5 characters")
      .max(10, "Must be 10 characters or less")
      .required("Username is required"),
    email: Yup.string().email("Email is Invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = () => {
    swal("Good job!", "Data Added Successfully", "success", {
      button: "Okay",
    }).then(() => {
      history.push("/dashboard");
    });
  };
  const deleteDataOperators = (id) => {
    Axios.delete(`http://localhost:3001/operators/delete/${id}`).then((res) => {
      setDataOperators(
        dataOperators.filter((value) => {
          return value.id !== id;
        })
      );
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/admin/dataoperators")
      .then((res) => {
        setDataOperators(res.data.operators);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        level: "operators",
        is_active: "yes",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        Axios.post("http://localhost:3001/register", {
          username: values.username.toLowerCase(),
          email: values.email.toLowerCase(),
          password: values.password,
          level: values.level,
          is_active: values.is_active,
        })
          .then(handleSubmit())
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {(formik) => (
        <div className="m-5">
          <h2>Data Operators BayarSekola</h2>
          <hr />
          <Button
            variant="outline-success"
            className="mb-3 float-right"
            onClick={handleShow}
          >
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
              {dataOperators.map((values, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{values.username}</td>
                    <td>{values.email}</td>
                    <td>
                      {values.is_active === "yes" ? (
                        <Badge variant="success">ACTIVE</Badge>
                      ) : (
                        <Badge variant="success">ACTIVE</Badge>
                      )}
                    </td>
                    <td>
                      {" "}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          deleteDataOperators(values.id);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Tambah Users Admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <TextField
                  label="Username"
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                />
                <TextField
                  label="Email"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                />
                <TextField
                  label="Password"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <TextField
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
                <Button
                  variant="primary"
                  type="submit"
                  className="float-right mt-3 "
                >
                  Tambah Admin
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </Formik>
  );
};

export default DataOperators;
