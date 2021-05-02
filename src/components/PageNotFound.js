import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <Container className="text-center mt-5 pt-5 text-success">
      <img src="/images/404.svg" alt="404" width="300px" className="my-5" />
      <h2>Page Not Found</h2>
      <p>We are sorry, but the page you requested was not found</p>
      <Link to="/">
        <Button variant="outline-success">Go Home</Button>
      </Link>
    </Container>
  );
};

export default PageNotFound;
