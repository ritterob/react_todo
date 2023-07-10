import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar>
            <Navbar.Brand href='/'>ToDos</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <Link to='/login' className='nav-link'>Login</Link>
                    <Link to='/categories' className='nav-link'>Categories</Link>
                    <Link to='/todos' className='nav-link'>ToDos</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
