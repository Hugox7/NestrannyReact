import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/img/logo.jpeg';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white" fixed="top" className="navbar-center">
                <Navbar.Brand><Link to="/"><img className="logo" src={logo} alt="nestranny logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link> 
                        <Link exact to="/">Accueil</Link>
                    </Nav.Link> 
                    <NavDropdown title="Nos missions" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/secteur-public">Formations secteur public</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/secteur-prive">Formations secteur privé</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/conseil-et-audit">Conseil, étude et audit</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link> 
                        <Link exact to="/contact">Contactez-nous</Link>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="header-line"/>
        </div>
    );
}

export default Header;