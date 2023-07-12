import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
    const { currentUser } = useAuth();
    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <Navbar expand='md' className='bg-primary px-3' data-bs-theme='dark'>
            <Navbar.Brand href='/'>ToDos</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <Link to='/' className='nav-link mt-1'>
                        Home
                    </Link>
                    <Link to='/todos' className='nav-link mt-1'>
                        ToDos
                    </Link>
                    <Link to='/categories' className='nav-link mt-1'>
                        Categories&ensp;
                    </Link>
                    {currentUser ? (
                        <a href='/' className='btn text-start px-0' onClick={() => handleLogout()}>
                            Logout&ensp;
                            {!currentUser.displayName
                                ? currentUser.email.split('@')[0]
                                : currentUser.displayName.split(' ')[0]}
                            <img id='profile' src={currentUser.photoURL} alt={currentUser.email} />
                        </a>
                    ) : (
                        <Link to='/login' className='nav-link mt-1'>
                            Login
                        </Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
