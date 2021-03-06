import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Card,
  Alert,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import Footer from "../components/Footer";
import Navs from "../components/Navs";
import { Formik, Form } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  const [loginStatus, setLoginStatus] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
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

  function handleLogin() {
    history.push("/dashboard");
  }
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        setLoading(true);
        Axios.post("http://localhost:3001/login", {
          username: values.username,
          password: values.password,
        })
          .then((response) => {
            if (response.data.message) {
              setMessage(response.data.message);
              setLoading(false);
            } else {
              setLoginStatus(response.data[0].username);
              setLoading(false);
              handleLogin();
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
            <Row className="mt-5">
              <Col className="d-none d-sm-block pt-5">
                <img src="/images/logo.svg" alt="bayarsekola" width="400vw" />
              </Col>
              <Col>
                <Card className="shadow-sm">
                  <Card.Body>
                    <h2 className="text-center">Bayar Sekola</h2>
                    <p className="text-secondary text-center">
                      sign in to start paying school tuition online
                    </p>
                    {message && (
                      <Alert variant="danger" className="font-small">
                        {message}
                      </Alert>
                    )}
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
                      {loading && (
                        <Button variant="success" disabled>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          Loading...
                        </Button>
                      )}
                      {!loading && (
                        <Button
                          variant="success"
                          type="submit"
                          className="mt-2"
                        >
                          Sign in
                        </Button>
                      )}
                    </Form>
                  </Card.Body>
                </Card>
                <Card className="text-center mt-4 shadow-sm">
                  <Card.Body>
                    Don't Have an account ?
                    <Link to="/register">
                      <a href="/register"> Sign Up</a>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      )}
    </Formik>
  );
};

export default Login;
