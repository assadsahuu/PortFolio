import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const skills = [
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'CSS', level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={4} key={index} className="mb-3">
              <h5>{skill.name}</h5>
              <ProgressBar now={skill.level} label={`${skill.level}%`} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
