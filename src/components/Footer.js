import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <Container>
        <hr />
        <footer className="text-center">
          <section className="mt-5 ">
            © 2021 BayarSekola | This Website was Created by
            <a href="https://github.com/fikridzkr"> Fikri Dzakir</a>
          </section>
          <section className="m-4">
            <a href="https://www.instagram.com/dzkirr/" className="px-4">
              <img src="/images/instagram.svg" alt="instagram" width="35px" />
            </a>
            <a href="https://twitter.com/fikridzkr" className="px-4">
              <img src="/images/twitter.svg" alt="twitter" width="35px" />
            </a>
            <a href="https://github.com/fikridzkr" className="px-4">
              <img src="/images/github.svg" alt="github" width="35px" />
            </a>
          </section>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
