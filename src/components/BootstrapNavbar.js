import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../utils/assets/logo192.png'

export default function BootstrapNavbar() {
    return (
        <nav>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><img className='nav-logo' alt='logo' src={logo}></img></Navbar.Brand>
                <Navbar.Brand href="/">House of Dogz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Info</Nav.Link>
                        <Nav.Link href="#link">Customer Login</Nav.Link>
                        <Nav.Link href="#link">Create Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    )
}
