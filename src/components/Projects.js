import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  { name: 'Online Pharmacy', description: 'Developed an application for an online medicine order using C integrated with live SQL server', image: 'path-to-image1.jpg' },
  { name: 'Railway Ticket Booking', description: 'Developed a robust Railway Booking System leveragingJava programming language and Firebase backend services.Designed an intuitive user interface allowing passengers to search book and manage train tickets seamlessly.', image: 'path-to-image2.jpg' },
  { name: 'Library Management System', description: 'Managed a library books record', image: 'path-to-image3.jpg' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
