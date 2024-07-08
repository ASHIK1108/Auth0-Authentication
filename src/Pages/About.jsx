import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Import custom styles for About page
import 'animate.css/animate.min.css'; // Import animate.css for animations

const About = () => {
  return (
    <Container className="about-page">
      <Row>
        <Col>
          <h1 className="animate__animated animate__bounceInDown">About This Project</h1>
          <p>This project includes a login system using Auth0 for authentication.</p>
          <h2 className="animate__animated animate__fadeIn">How Auth0 Works</h2>
          <p>
            Auth0 is an easy-to-implement, adaptable authentication and authorization platform. 
            It provides secure login by handling the complexities of authentication processes.
          </p>
          <h3 className="animate__animated animate__fadeIn">Steps to Implement Auth0 in Your Project</h3>
          <ol>
            <li>Create an Auth0 account and set up a new application.</li>
            <li>Configure the callback URLs and allowed origins in the Auth0 dashboard.</li>
            <li>Install the Auth0 React SDK:</li>
            <pre><code>npm install @auth0/auth0-react</code></pre>
            <li>
              Wrap your application with the `Auth0Provider` and provide your Auth0 domain and client ID:
              <pre><code>
{`import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="{YOUR_DOMAIN}"
    clientId="{YOUR_CLIENT_ID}"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);`}
              </code></pre>
            </li>
            <li>Use the `useAuth0` hook to access authentication state and methods in your components:</li>
            <pre><code>
{`import { useAuth0 } from '@auth0/auth0-react';

const MyComponent = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={loginWithRedirect}>Log In</button>
      ) : (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </div>
      )}
    </div>
  );
};`}
            </code></pre>
          </ol>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
