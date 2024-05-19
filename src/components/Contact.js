import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', description: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact</h2>
        <Row>
          <Col md={6} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={form.name} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={form.email} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" value={form.date} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" value={form.description} onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={30} className="mx-2" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} className="mx-2" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} className="mx-2" /></a>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
