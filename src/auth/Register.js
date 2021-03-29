import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Navs from "../components/Navs";
import { Formik, Form } from "formik";
import Footer from "../components/Footer";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  let history = useHistory();
  // validation here
  const validate = Yup.object({
    fullName: Yup.string()
      .min(5, "Full Name must be at least 5 characters")
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    username: Yup.string()
      .min(5, "Full Name must be at least 5 characters")
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

  // redirect pages
  function handleClick() {
    swal({
      title: "Registration is successful",
      text: "You will be directed to the login page!",
      icon: "success",
      button: "Okay",
    }).then(() => {
      history.push("/login");
    });
  }
  return (
    <Formik
      initialValues={{
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        level: "students",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        Axios.post("http://localhost:3001/register", {
          fullName: values.fullName,
          username: values.username,
          email: values.email,
          password: values.password,
          level: values.level,
        })
          .then((res) => {
            console.log(res);
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
                    <p className="text-secondary">
                      sign up now to start paying school tuition online
                    </p>
                    <Form>
                      <TextField
                        label="Full Name"
                        type="text"
                        placeholder="Enter Full Name"
                        name="fullName"
                      />
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
                        variant="success"
                        type="submit"
                        className="mt-2"
                        onClick={handleClick}
                      >
                        Sign up
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
                <Card className="text-center mt-4 shadow-sm">
                  <Card.Body>
                    Have an account ? <a href="/login">Sign in</a>
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

export default Register;
