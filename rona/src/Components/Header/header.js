import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import './header.css'
import corona from '../../corona-removebg-preview.png';


class Header extends React.Component {


    render() {
        return (
            
            <Navbar className="bar-whole" variant="dark" bg="dark" expand="lg">
                <Navbar.Brand href="/">
                <img className="logo" src={corona} width="40" height="40" alt="" class="d-inline-block align-top" />
                    Whack-a-Rona</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="bar-right">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Whack-a-Rona" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/game">Start Game</NavDropdown.Item>
                            <NavDropdown.Item href="/leaderboard">Leaderboard</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="/mapping">Find-a-Rona</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header