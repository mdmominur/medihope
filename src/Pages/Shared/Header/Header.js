import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home"> <span className="text-brand display-3 fw-bold">Medi</span><span className="display-6 fw-bold">Hope</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ps-4 ps-md-0">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Appointment</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
               
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;