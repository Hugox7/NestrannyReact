import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';

import './Header.css';

import logo from '../assets/img/logo.jpeg';

const Header = () => {
    return (
        <div id="header">
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white" fixed="top" className="navbar-center">
                <Navbar.Brand><Link to="/"><img className="logo" src={logo} alt="nestranny logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <IndexLinkContainer exact to="/">
                            <Nav.Link>Accueil</Nav.Link> 
                        </IndexLinkContainer>
                        <NavDropdown title="Nos missions" id="collasible-nav-dropdown"> 
                            <IndexLinkContainer to="/secteur-public">
                                <NavDropdown.Item>Formations secteur public</NavDropdown.Item>
                            </IndexLinkContainer>
                            <IndexLinkContainer to="/secteur-prive">
                                <NavDropdown.Item>Formations secteur privé</NavDropdown.Item>
                            </IndexLinkContainer>
                            <IndexLinkContainer to="/conseil-et-audit">
                                <NavDropdown.Item>Conseil, études et audits</NavDropdown.Item>
                            </IndexLinkContainer>
                        </NavDropdown>
                        <IndexLinkContainer to="/contact">
                            <Nav.Link>Contactez-nous</Nav.Link>
                        </IndexLinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;