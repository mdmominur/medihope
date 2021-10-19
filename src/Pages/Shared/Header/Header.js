import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import './Header.css';
const Header = () => {
    const {user, logout} = useAuth();
    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/"> <span className="text-brand display-3 fw-bold">Medi</span><span className="display-6 fw-bold">Hope</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ps-4 ps-md-0">
                <Nav.Link as={NavLink} activeClassName="active" to="/home">Home</Nav.Link>
                <Nav.Link as={NavLink} activeClassName="active" to="/doctors">Doctors</Nav.Link>
                <Nav.Link as={NavLink} activeClassName="active" to="/about">About</Nav.Link>
                <Nav.Link as={NavLink} activeClassName="active" to="/contact">Contact</Nav.Link>
               {
                   user.email 
                   ? <div className="ms-4"><span>{user.displayName}</span> <button className="btn-brand" onClick={logout}>Logout</button></div> 
                   : <Nav.Link as={NavLink} activeClassName="active" to="/login">Login</Nav.Link>
               }
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;