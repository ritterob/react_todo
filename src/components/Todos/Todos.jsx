import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import SingleTodo from './SingleTodo';
import Filter from './Filter';

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState(0);

    useEffect(() => {
        axios.get(`https://localhost:7039/api/ToDos`).then((response) => {
            console.log(response);
            setTodos(response.data);
        });
    }, []);

    return (
        <section className='todos'>
            <h1 className='page-title'>Todos</h1>
            <Filter setFilter={setFilter} />
            <Container className='p-2'>
                <table className='table bg-info table-dark my-3'>
                    <thead className='table-primary text-uppercase'>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filter === 0 && todos.map((t) => <SingleTodo key={t.toDoId} todo={t} />)}
                        {filter > 0 &&
                            todos
                                .filter((t) => t.category.categoryId === filter)
                                .map((t) => <SingleTodo key={t.toDoId} todo={t} />)}
                        {filter === -1 &&
                            todos.filter((t) => t.done === true).map((t) => <SingleTodo key={t.toDoId} todo={t} />)}
                        {filter === -2 &&
                            todos.filter((t) => t.done === false).map((t) => <SingleTodo key={t.toDoId} todo={t} />)}
                    </tbody>
                </table>
            </Container>
        </section>
    );
}
