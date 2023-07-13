import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import SingleCategory from './SingleCategory';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7039/api/Categories`).then((response) => {
            console.log(response);
            setCategories(response.data);
        });
    }, []);

    return (
        <section className='categories'>
            <h1 className='page-title'>Categories</h1>
            <Container className='p-2'>
                <table className='table bg-info table-dark my-3'>
                    <thead className='table-primary text-uppercase'>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c) => (
                            <SingleCategory key={c.categoryId} category={c} />
                        ))}
                    </tbody>
                </table>
            </Container>
        </section>
    );
}
