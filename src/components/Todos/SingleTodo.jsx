import React from 'react';

export default function SingleTodo(props) {
    const {name, done, category} = props.todo;

    return (
        <tr>
            <td>{name}</td>
            <td>{category.catName}</td>
            <td>{done ? <span>&check;</span> : <span>&times;</span>}</td>
        </tr>
    )
}
