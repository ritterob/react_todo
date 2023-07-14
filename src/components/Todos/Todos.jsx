import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import SingleTodo from './SingleTodo';
import Filter from './Filter';
import { useAuth } from '../../contexts/AuthContext';
import ToDoCreate from './ToDoCreate';

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const { currentUser } = useAuth();
    const [showCreate, setShowCreate] = useState(false);
    const [filter, setFilter] = useState(0);

    const getToDos = () => {
        axios.get(`https://localhost:7039/api/ToDos`).then((response) => {
            console.log(response);
            setTodos(response.data);
        });
    };

    useEffect(() => {
        getToDos();
    }, []);

    return (
        <section className='todos'>
            <h1 className='page-title'>Todos</h1>
            {/* BEGIN CREATE UI */}
            {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && (
                <div className='bg-dark p2 mb-3 text-center opacity-75'>
                    <button className='btn btn-info my-2' onClick={() => setShowCreate(!showCreate)}>
                        {!showCreate ? 'Add a Task' : 'Cancel'}
                    </button>
                    <div className="row">
                        <div className='createContainer col-md-6 offset-3'>
                            {showCreate && <ToDoCreate getToDos={getToDos} setShowCreate={setShowCreate} />}
                        </div>
                    </div>
                </div>
            )}
            {/* END CREATE UI */}
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
