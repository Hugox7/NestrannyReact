import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Nestranny Conseil.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link> 
                    <Link exact to="/">Accueil</Link>
                </Nav.Link>
                <NavDropdown title="Nos missions" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                        <Link to="/secteur-public/">Formations secteur public</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/secteur-prive/">Formations secteur privé</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/conseil-et-audit/">Conseil, étude et audit</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;