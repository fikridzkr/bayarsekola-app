import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";

const ProfileSettings = () => {
  return (
    <>
      <Container className="mt-3">
        <h1>Profile Settings</h1>
        <hr />
        <h4 className="mb-3">Change Password</h4>
        <Row>
          <Col md={6}>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileSettings;
