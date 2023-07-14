import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import SingleCategory from './SingleCategory';
import { useAuth } from '../../contexts/AuthContext';
import CategoryCreate from './CategoryCreate';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const { currentUser } = useAuth();
    const [showCreate, setShowCreate] = useState(false);

    const getCategories = () => {
        axios.get(`https://localhost:7039/api/Categories`).then((response) => {
            console.log(response);
            setCategories(response.data);
        });
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <section className='categories'>
            <h1 className='page-title'>Categories</h1>
            {/* BEGIN CREATE UI */}
            {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && (
                <div className='bg-dark p2 mb-3 text-center opacity-75'>
                    {showCreate ? (
                        <>
                            <button className='btn btn-warning m-2' onClick={() => setShowCreate(false)}>
                                Cancel
                            </button>
                            <div className="row">
                                <div className="col-md-6 offset-3">
                                    <CategoryCreate setShowCreate={setShowCreate} getCategories={getCategories} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <button className='btn btn-info m-2' onClick={() => setShowCreate(true)}>
                            Add New Category
                        </button>
                    )}
                </div>
            )}
            {/* END CREATE UI */}
            <Container className='p-2'>
                <table className='table bg-info table-dark my-3'>
                    <thead className='table-primary text-uppercase'>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c) => (
                            <SingleCategory key={c.categoryId} category={c} getCategories={getCategories} />
                        ))}
                    </tbody>
                </table>
            </Container>
        </section>
    );
}
