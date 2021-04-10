import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function BootstrapBotNavbar() {
    return (
        <nav aria-label='Bottom Menu'>
            <Navbar expand="lg">
                <Nav className="ml-auto mr-auto text-center">
                    <Nav.Link href="/"><span className='nav-link-style text-light'>Home</span></Nav.Link>
                    <Nav.Link href="/info"><span className='nav-link-style text-light'>Info</span></Nav.Link>
                    <Nav.Link href="https://secure.petexec.net/login.php" target='blank'><span className='nav-link-style text-light'>Customer Login</span></Nav.Link>
                    <Nav.Link href="https://secure.petexec.net/newOwner.php?x=bVh+agckRrs=" target='blank'><span className='nav-link-style text-light'>Create Account</span></Nav.Link>
                    <Nav.Link href="https://atlaspet.net" target='blank'><span className='nav-link-style text-light'>Atlas Pet</span></Nav.Link>
                </Nav>
            </Navbar>
            <div className='text-center p-3 text-light border-top'>
                <p>
                    <span className='font-weight-bold'>House of Dogz</span>
                    <br />
                    12761 Central Ave NE
                    <br />
                    Blaine, MN 55434
                    <br />
                    833-463-3649
                </p>
            </div>
        </nav >
    )
}
