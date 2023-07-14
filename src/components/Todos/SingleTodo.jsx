import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ToDoEdit from './ToDoEdit';
import axios from 'axios';
import { CiEdit, CiSquareRemove } from 'react-icons/ci';

export default function SingleTodo(props) {
    const { name, done, category } = props.todo;
    const { currentUser } = useAuth();
    const [showEdit, setShowEdit] = useState(false);

    const deleteToDo = (id) => {
        if (window.confirm(`Are you sure that you want to delete ${props.todo.name}`)) {
            axios.delete(`http://todoapi.ritterhaus.net/api/ToDos/${id}`).then(() => props.getToDos());
        }
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{category.catName}</td>
            <td>{done ? <span>&check;</span> : <span>&times;</span>}</td>
            {/* BEGIN EDIT UI */}
            {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && (
                <td>
                    <button id='editLink' onClick={() => setShowEdit(true)}>
                        <CiEdit />
                    </button>
                    <button id='deleteLink' onClick={() => deleteToDo(props.todo.toDoId)}>
                        <CiSquareRemove />
                    </button>
                    {showEdit && (
                        <ToDoEdit
                            setShowEdit={setShowEdit}
                            showEdit={showEdit}
                            todo={props.todo}
                            getToDos={props.getToDos}
                        />
                    )}
                </td>
            )}
            {/* END EDIT UI */}
        </tr>
    );
}
