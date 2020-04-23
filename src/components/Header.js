import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';

import './Header.css';

import logo from '../assets/img/logo.jpeg';
import twitter from '../assets/twitter.png';

const Header = () => {
    return (
        <div id="header">
            <Navbar collapseOnSelect expand="lg" navbar bg="light" fixed="top" className="navbar-center">
                <Navbar.Brand><Link to="/"><img className="logo" src={logo} alt="nestranny logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <IndexLinkContainer exact to="/">
                            <Nav.Link>Accueil</Nav.Link> 
                        </IndexLinkContainer>
                        <NavDropdown title="Nos missions" id="collasible-nav-dropdown"> 
                            <IndexLinkContainer to="/secteur-public">
                                <NavDropdown.Item>Formations Secteur public</NavDropdown.Item>
                            </IndexLinkContainer>
                            <IndexLinkContainer to="/secteur-prive">
                                <NavDropdown.Item>Formations Secteur privé</NavDropdown.Item>
                            </IndexLinkContainer>
                            <IndexLinkContainer to="/conseil-et-audit">
                                <NavDropdown.Item>Conseil, Etudes et Audits</NavDropdown.Item>
                            </IndexLinkContainer>
                        </NavDropdown>
                        <IndexLinkContainer to="/partenaires">
                            <Nav.Link>Nos partenaires</Nav.Link> 
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/contact">
                            <Nav.Link>Contactez-nous</Nav.Link>
                        </IndexLinkContainer>

                            <div id='twitter-wrapper'>
                                <a href="https://twitter.com/NestrannyC"  target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter logo" /></a>
                            </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;