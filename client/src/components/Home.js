// src/components/Home.js

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css'; // Ensure this file exists or adjust the import

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="overlay"></div>
        <Container>
          <Row>
            <Col md={6} className="hero-content">
              <h1>Welcome to Clarity App</h1>
              <p>Manage your representatives and stay informed.</p>
              <Button variant="primary" href="/register">Get Started</Button>
            </Col>
          </Row>
        </Container>
        <img src="/heroimage.png" alt="Hero" className="hero-image"/>
      </section>

      <section className="features">
        <Container>
          <h2>Features</h2>
          <Row>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Track Representatives</Card.Title>
                  <Card.Text>Stay updated with the latest activities of your representatives.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Easy Management</Card.Title>
                  <Card.Text>Add, edit, and manage your representatives effortlessly.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Secure Access</Card.Title>
                  <Card.Text>Secure login and data protection for all users.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials">
        <Container>
          <h2>What Our Users Say</h2>
          <Row>
            <Col md={4}>
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text>"Clarity App has made it so much easier to keep track of my representatives!" - User A</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text>"I love the simple and clean interface." - User B</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text>"Highly recommend this app to anyone who wants to stay informed." - User C</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer">
        <Container>
          <Row>
            <Col md={6}>
              <p>© 2024 Clarity App. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-md-right">
              <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
