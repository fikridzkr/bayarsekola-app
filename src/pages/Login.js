import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import Navs from "../components/Navs";

const Login = () => {
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
                  sign in to start paying school tuition online
                </p>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-start">Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
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
                Don't Have an account ? <a href="/register">Sign Up</a>
              </Card.Body>
            </Card>
          </section>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
