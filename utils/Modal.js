import { useState, useEffect } from 'react';
import { Country, State } from "country-state-city";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { RotatingLines } from 'react-loader-spinner';
import configData from "../config.json";

function Example({ data }) {
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    state: '',
    purpose: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    const countryStates = State.getStatesOfCountry(countryCode);
    setStates(countryStates);
    setFormData({ ...formData, location: countryCode, state: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    // Only show the modal if there are no URLLinks in the data
    if (data.every(item => !item.URLLink)) {
      setShow(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setErrors({});

    try {
      const response = await axios.post(
        `${configData.SERVER_FROM}contact-form-7/v1/contact-forms/6770/feedback`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.status === 'mail_sent') {
        setFormVisible(false);
        setSuccessMessage(true);
      } else {
        const fieldErrors = {};
        response.data.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
    setIsSubmitting(false);
  };

  const Submission = () => (
    <div>
      <h3>Here you can download the files</h3>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            {item.URLLink ? (
              <a href={item.URLLink} target="_blank" rel="noopener noreferrer">
                <button className="btn-know">Know More</button>
              </a>
            ) : (
              <a href={item.pdflink} download>
                <button className="btn-know my-1">{item.title}</button>
              </a>
            )}
          </div>
        ))
      ) : (
        <p>No files available for download</p>
      )}
    </div>
  );

  return (
    <>
      {data.some(item => item.URLLink) ? (
        <button className='btn-know d-flex justify-content-center align-items-center mx-auto'>
            <a
          href={data.find(item => item.URLLink).URLLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black"
        >
          Know More 
        </a>
        </button>
      ) : (
        <button
          className="btn-know d-flex justify-content-center align-items-center mx-auto"
          onClick={handleShow}
        >
          Download PDF Now
        </button>
      )}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{formVisible && "Please fill out the following details"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-bg">
            {formVisible ? (
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Row>
                  <Col lg={12} sm={12}>
                    <div className="mb-3">
                      <label className="label-style form-label">Email ID</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12}>
                    <div className="mb-3">
                      <label className="label-style form-label">Location</label>
                      <Form.Select
                        name="location"
                        className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                        value={formData.location}
                        onChange={handleCountryChange}
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.isoCode} value={country.isoCode}>
                            {country.name}
                          </option>
                        ))}
                      </Form.Select>
                      {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12}>
                    <div className="mb-3">
                      <label className="label-style form-label">State</label>
                      <Form.Select
                        name="state"
                        className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                        value={formData.state}
                        onChange={handleChange}
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </option>
                        ))}
                      </Form.Select>
                      {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12}>
                    <div className="mb-3">
                      <label className="label-style form-label">Purpose</label>
                      <Form.Select
                        name="purpose"
                        className={`form-control ${errors.purpose ? 'is-invalid' : ''}`}
                        value={formData.purpose}
                        onChange={handleChange}
                      >
                        <option value="">Select Purpose</option>
                        {["awareness and education", "personal use", "seasonal preparedness", "promoting behavioural change", "other"].map((purpose) => (
                          <option key={purpose} value={purpose}>
                            {purpose}
                          </option>
                        ))}
                      </Form.Select>
                      {errors.purpose && <div className="invalid-feedback">{errors.purpose}</div>}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <button type="submit" className="btn btn-form" disabled={isSubmitting}>
                      Sumbit
                      {isSubmitting && (
                        <RotatingLines
                          strokeColor="white"
                          strokeWidth="3"
                          animationDuration="1"
                          width="20"
                          visible={true}
                        />
                      )}
                    </button>
                  </Col>
                </Row>
                {error && <p className="error">{error}</p>}
              </form>
            ) : (
              <Submission />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
