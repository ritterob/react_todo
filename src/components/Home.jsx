import React from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
    return (
        <section>
            <h1 className='page-title'>React ToDos</h1>
            <Container>
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <article className='info-text'>
                            <p>
                                This is some text identifying what this ToDo application is supposed to do. It ought to go into some
                                detail explaining how to use the application, and what user authentication is required in order to
                                access certain parts of the app.
                            </p>
                        </article>
                    </div>
                </div>
            </Container>
        </section>
    );
}
