import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const Introduction = () => {
  return (
    <section id="home" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image src='/pic.jpg' roundedCircle fluid />
          </Col>
          <Col md={8}>
            <h1>Hello, I'm ASAD Ullah Mujahid</h1>
            <p className="lead">Gained hands-on experience in areas such as software
development, database management, computer networks,
computer science principles, algorithms, data structures and
programming languages and artificial intelligence.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Introduction;
