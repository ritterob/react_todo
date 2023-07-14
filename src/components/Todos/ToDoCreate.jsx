import React from 'react';
import ToDoForm from './ToDoForm';

export default function ToDoCreate(props) {
    return (
        <article className='createToDo m-2 text-light justify-content-center'>
            <ToDoForm setShowCreate={props.setShowCreate} getToDos={props.getToDos} />
        </article>
    );
}
