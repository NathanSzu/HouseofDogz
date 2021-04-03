import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../logo.svg'

export default function BootstrapNavbar() {
    return (
        <nav>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><img className='nav-logo' alt='logo' src={logo}></img></Navbar.Brand>
                <Navbar.Brand href="/"><span className='nav-title'>House of Dogz</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/"><span className='nav-link-style'>Home</span></Nav.Link>
                        <Nav.Link href="/info"><span className='nav-link-style'>Info</span></Nav.Link>
                        <Nav.Link href="https://secure.petexec.net/login.php" target='blank'><span className='nav-link-style'>Customer Login</span></Nav.Link>
                        <Nav.Link href="https://secure.petexec.net/newOwner.php?x=bVh+agckRrs=" target='blank'><span className='nav-link-style'>Create Account</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    )
}
