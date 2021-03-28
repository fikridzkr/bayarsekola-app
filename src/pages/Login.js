import React, { useState, useEffect } from "react";
import { Container, Button, Card, Alert } from "react-bootstrap";
import Footer from "../components/Footer";
import Navs from "../components/Navs";
import { Formik, Form } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import Axios from "axios";

const Login = () => {
  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;
  // validation here
  const validate = Yup.object({
    username: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
      console.log(response);
    });
  }, []);
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        Axios.post("http://localhost:3001/login", {
          username: values.username,
          password: values.password,
        })
          .then((response) => {
            if (response.data.message) {
              setLoginStatus(response.data.message);
            } else {
              setLoginStatus(response.data[0].username);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {(formik) => (
        <div>
          <Navs />
          <Container>
            <section class="d-flex justify-content-center mt-5">
              <section className="mt-4 mr-5">
                <img
                  src="/images/payment.svg"
                  alt="bayarsekola"
                  width="350vw"
                />
              </section>
              <section className="">
                <Card className="shadow-sm">
                  <Card.Body>
                    <h2 className="text-center">Bayar Sekola</h2>
                    <p className="text-secondary text-center">
                      sign in to start paying school tuition online
                    </p>
                    <Alert variant="danger" className="font-small">
                      {loginStatus}
                    </Alert>
                    <Form>
                      <TextField
                        label="Username"
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                      />
                      <TextField
                        label="Password"
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                      <Button variant="success" type="submit" className="mt-2">
                        Sign in
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
                <Card className="text-center mt-4 shadow-sm">
                  <Card.Body>
                    Don't Have an account ? <a href="/register">Sign Up</a>
                  </Card.Body>
                </Card>
              </section>
            </section>
          </Container>
          <Footer />
        </div>
      )}
    </Formik>
  );
};

export default Login;
