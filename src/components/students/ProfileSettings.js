import React from "react";
import { Container, Form, Button, Col, Row, Card } from "react-bootstrap";

const ProfileSettings = () => {
  return (
    <>
      <Container className="mt-3">
        <h1>Profile Settings</h1>
        <hr />
        <Card style={{ width: "50%" }} className="mb-3">
          <Card.Body>
            <h3>Update Profile</h3>
            <hr />
            <Row>
              <Col md={3}>
                <img src="/images/icon.png" alt="profile" width="90px" />
              </Col>
              <Col md={9}>
                <Form>
                  <Form.Group>
                    <Form.File label="Upload profile baru anda" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Button variant="outline-success"> Bayar </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "50%" }}>
          <Card.Body>
            <h3>Change Password</h3>
            <hr />
            <Form>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                />
                <Form.Text className="text-muted">
                  We'll never share your password with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="danger" type="submit">
                Change Password
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProfileSettings;
