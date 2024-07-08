import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css'; // Import custom styles for Blog page
import 'animate.css/animate.min.css'; // Import animate.css for animations

const Blog = () => {
  return (
    <Container fluid className="blog-page">
      <div className="blog-header">
        <h1 className="animate__animated animate__bounceInDown">Welcome to Our Blog!</h1>
        <p className="animate__animated animate__fadeIn">Discover interesting articles and updates.</p>
      </div>
      <Row className="blog-posts">
        <Col md={6} className="blog-post animate__animated animate__fadeInLeft">
          <h2>Post Title 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in augue iaculis, eu malesuada nulla commodo.</p>
        </Col>
        <Col md={6} className="blog-post animate__animated animate__fadeInRight">
          <h2>Post Title 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in augue iaculis, eu malesuada nulla commodo.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
