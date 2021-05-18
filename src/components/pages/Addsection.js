import React from 'react'
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
function Addsection() {
    return (
        <>
            <Nav className="aside-list">
                <LinkContainer to="/">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/trips">
                    <Nav.Link>Trips</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                    <Nav.Link>contact</Nav.Link>
                </LinkContainer>
            </Nav>
        </>
    )
}

export default Addsection
