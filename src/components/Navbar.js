import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
function NavBar() {
    return (
        <>
            <Navbar className="bg-white shadow" expand="lg">
                <Container>

                    <Navbar.Brand href="#" className="h1">
                        <i className="bx bx-buildings bx-sm text-dark"></i>
                        <span className="text-dark h4">UI</span>
                        <span className="text-purple h4"> Design</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <LinkContainer to="/">
                                <Nav.Link className="btn-outline-primary rounded-pill px-3">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className="btn-outline-primary rounded-pill px-3">About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/trips">
                                <Nav.Link className="btn-outline-primary rounded-pill px-3">Courses</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link className="btn-outline-primary rounded-pill px-3">Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#" className="text-purple">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </Nav.Link>

                            <Nav.Link href="#" className="text-purple">
                                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
