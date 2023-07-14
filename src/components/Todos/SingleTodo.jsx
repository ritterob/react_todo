import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { FaEdit } from 'react-icons/fa';
import ToDoEdit from './ToDoEdit';

export default function SingleTodo(props) {
    const { name, done, category } = props.todo;
    const { currentUser } = useAuth();
    const [showEdit, setShowEdit] = useState(false);

    return (
        <tr>
            <td>{name}</td>
            <td>{category.catName}</td>
            <td>{done ? <span>&check;</span> : <span>&times;</span>}</td>
            {/* BEGIN EDIT UI */}
            {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && (
                <td>
                    <button  id='editLink' onClick={() => setShowEdit(true)}>
                        <FaEdit />
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
