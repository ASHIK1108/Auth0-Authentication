import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={6} className="text-left">
            <p>&copy; 2024 Ashik Barman</p>
          </Col>
          <Col md={6} className="text-right">
            <p>Follow me on:
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> |
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"> GitHub</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
