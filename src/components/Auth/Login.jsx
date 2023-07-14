import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleAuth() {
        await login();
        return navigate('/');
    }

    return (
        <div className='login'>
            <article className='opacity-75 mb-5 p-5 text-dark'>
                <Container>
                    <Card className='m-2 border-dark text-center'>
                        <Card.Header className='bg-dark text-light'>
                            <h2>Login for full functionality</h2>
                        </Card.Header>
                        <Card.Body>
                            <button className='btn btn-success' onClick={() => handleAuth()}>
                                Login with Github
                            </button>
                        </Card.Body>
                    </Card>
                </Container>
            </article>
        </div>
    );
}
