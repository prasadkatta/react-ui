import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <div className="middle-content">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h3 className="pb-4">Contact</h3>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Frist Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Frist Name" />
                                    <Form.Control.Feedback type="invalid">Please Enter Frist Name</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Last Name" />
                                    <Form.Control.Feedback type="invalid">Please Enter Last Name</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email" />
                                    <Form.Control.Feedback type="invalid">Please Enter Email</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required type="password" placeholder="Password" />
                                    <Form.Control.Feedback type="invalid">Please Enter password</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control required placeholder="1234 Main St" />
                                <Form.Control.Feedback type="invalid">Please Enter Address</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control required placeholder="Apartment, studio, or floor" />
                                <Form.Control.Feedback type="invalid">Please Enter Address 2</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required />
                                    <Form.Control.Feedback type="invalid">Please Enter City</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control required />
                                    <Form.Control.Feedback type="invalid">Please Enter State</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control required />
                                    <Form.Control.Feedback type="invalid">Please Enter Zip</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Button className="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300" type="submit">
                                Submit
                        </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
