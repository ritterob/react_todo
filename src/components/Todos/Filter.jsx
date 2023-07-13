import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Filter(props) {
    const [todos, setTodos] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7039/api/ToDos`).then((response) => {
            console.log(response);
            setTodos(response.data);
        });
        axios.get(`https://localhost:7039/api/Categories`).then((response) => {
            console.log(response);
            setCategories(response.data);
        });
    }, []);

    return (
        <div className='text-center mt-1'>
            <button className='btn btn-outline-warning m-1' onClick={() => props.setFilter(0)}>
                All
            </button>
            <button className='btn btn-outline-warning m-1' onClick={() => props.setFilter(-1)}>
                Complete
            </button>
            <button className='btn btn-outline-warning m-1' onClick={() => props.setFilter(-2)}>
                Pending
            </button>
            {categories.map((c) => (
                <button key={c.catName} className='btn btn-outline-warning m-1' onClick={() => props.setFilter(c.categoryId)}>{c.catName}</button>
            ))}
        </div>
    );
}
