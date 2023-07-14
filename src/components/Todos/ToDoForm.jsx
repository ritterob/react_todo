import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { todoSchema } from '../../utilities/ValidationSchema';
import axios from 'axios';

export default function ToDoForm(props) {
    const [Categories, setCategories] = useState([]);

    const getCategories = () => {
        axios.get(`https://localhost:7039/api/Categories`).then((response) => {
            console.log(response);
            setCategories(response.data);
        });
    };

    const handleSubmit = (values) => {
        console.log(values);
        if (!props.todo) {
            //  If there is no todo, create one.
            const todoToCreate = values;
            axios.post(`https://localhost:7039/api/ToDos`, todoToCreate).then((response) => {
                props.setShowCreate(false);
                props.getToDos();
            });
        } else {
            //  There IS a todo, so edit it.
            const todoToEdit = {
                toDoId: props.todo.toDoId,
                name: values.name,
                dons: values.done,
                categoryId: values.categoryId,
            };
            axios.put(`https://localhost:7039/api/ToDos/${props.todo.toDoId}`, todoToEdit).then((response) => {
                props.getToDos();
                props.setShowEdit(false);
            });
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <Formik
            initialValues={{
                name: props.todo ? props.todo.name : '',
                categoryId: props.todo ? props.todo.categoryId : '',
            }}
            validationSchema={todoSchema}
            onSubmit={(values) => handleSubmit(values)}>
            {({ errors, touched }) => (
                <Form id='resourceForm'>
                    <div className='form-group m-3'>
                        <Field name='name' className='form-control' placeholder='Name' />
                        {errors.name && touched.name && <span className='text-danger fw-bold'>{errors.name}</span>}
                    </div>
                    <div className='form-group m-3'>
                        <Field name='categoryId' as='select' className='form-control'>
                            <option value='' disabled>
                                &lt;-- Select one --&gt;
                            </option>
                            {Categories.map((c) => (
                                <option key={c.categoryId} value={c.categoryId}>
                                    {c.catName}
                                </option>
                            ))}
                        </Field>
                    </div>
                    <div className="form-group m-3">
                        <button className="btn btn-info m3" type='submit'>
                            Add To List
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
