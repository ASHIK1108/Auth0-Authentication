import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import custom styles for Home page
import 'animate.css/animate.min.css'; // Import animate.css for animations

const Home = () => {
  return (
    <Container fluid className="home-page">
      <div className="hero-section">
        <h1 className="animate__animated animate__fadeInDown">Hello, I'm Ashik Barman</h1>
        <p className="animate__animated animate__fadeIn">Full Stack Web Developer</p>
      </div>
      <Row className="skills-section">
        <Col md={6} className="skills-left animate__animated animate__fadeInLeft">
          <h2>My Skills</h2>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React, Angular, Vue.js</li>
            <li>Node.js, Express</li>
            <li>SQL, MongoDB</li>
            <li>Git, GitHub</li>
          </ul>
        </Col>
        <Col md={6} className="about-me animate__animated animate__fadeInRight">
          <h2>About Me</h2>
          <p>
            I am a passionate web developer with experience in building dynamic web applications. 
            I enjoy learning new technologies and solving real-world problems through creative solutions.
          </p>
          <p>
            In my spare time, I love exploring new coding challenges and contributing to open-source projects.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
