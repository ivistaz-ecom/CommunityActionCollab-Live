import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function DetailsFormModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    email: '',
    location: 'India',
    state: 'Delhi',
    purpose: 'Personal Use'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Please fill out the following details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>LOCATION</Form.Label>
            <Form.Control
              as="select"
              name="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="state">
            <Form.Label>STATE</Form.Label>
            <Form.Control
              as="select"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="purpose">
            <Form.Label>Purpose</Form.Label>
            <Form.Control
              as="select"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
            >
              <option>Personal Use</option>
              <option>Business Use</option>
            </Form.Control>
          </Form.Group>

          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default DetailsFormModal;
