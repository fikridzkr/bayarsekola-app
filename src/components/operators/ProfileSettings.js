import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import Axios from "axios";
import swal from "sweetalert";

const ProfileSettings = ({ user_id }) => {
  const idUser = user_id;
  const [newPassword, setNewPassword] = useState();
  const changePassword = () => {
    Axios.put("http://localhost:3001/changepassword", {
      user_id: idUser,
      newPassword: newPassword,
    })
      .then(handleSubmit())
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = () => {
    swal("Yeyyy!", "Your password has been changed successfully!", "success", {
      button: "Okay",
    }).then(() => {
      setNewPassword("");
    });
  };
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
                  onChange={(event) => setNewPassword(event.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your password with anyone else.
                </Form.Text>
              </Form.Group>
              <Button
                variant="danger"
                type="submit"
                onClick={() => changePassword()}
              >
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
