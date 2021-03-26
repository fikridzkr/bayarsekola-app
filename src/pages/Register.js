import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import Navs from "../components/Navs";
const Register = () => {
  return (
    <div>
      <Navs />
      <Container>
        <section class="d-flex justify-content-center mt-5">
          <section className="mt-4 mr-5">
            <img src="/images/payment.svg" alt="bayarsekola" width="350vw" />
          </section>
          <section className="">
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="text-center">Bayar Sekola</h2>
                <p className="text-secondary">
                  sign up now to start paying school tuition online
                </p>
                <Form>
                  <Form.Group controlId="formBasicFullname">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-start">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Log in
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
    </div>
  );
};

export default Register;
