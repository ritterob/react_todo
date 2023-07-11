import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleAuth() {
        logout();
        navigate('/');
    }

    return (
        <div className='logout text-center p-3 bg-dark text-white'>
            <button className='btn btn-info' onClick={() => handleAuth()}>
                Logout
            </button>
        </div>
    );
}
