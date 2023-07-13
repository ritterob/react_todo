import React from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
    return (
        <section>
            <h1 className='page-title'>React ToDos</h1>
            <Container>
                <div className='row justify-content-center'>
                    <div className='col-sm-8'>
                        <article className='info-text'>
                            <p>
                                This is some text identifying what this ToDo application is supposed to do. It ought to
                                go into some detail explaining how to use the application, and what user authentication
                                is required in order to access certain parts of the app.
                            </p>
                            <p>
                                Of course, there would likely be even more text, because this app would look rather
                                silly with only a tiny bit of explanatory information.
                            </p>
                            <ol>
                                <li>Perhaps even some bullet points.</li>
                                <li>Like step-by-step instructions.</li>
                                <li>Something that will help the reader on the way.</li>
                            </ol>
                            <p>
                                Well, it <em>is</em> pretty hard to come up with some text like that on the fly.
                                Maybe, one day, there will be some useful information here.
                            </p>
                        </article>
                    </div>
                </div>
            </Container>
        </section>
    );
}
