import React from 'react';
import { Formik, Form, Field } from 'formik';
import { categorySchema } from '../../utilities/ValidationSchema';
import axios from 'axios';

export default function CategoryForm(props) {
    const handleSubmit = (values) => {
        console.log(values);
        if (!props.category) {
            //  No category, so we'll create one.
            const categoryToCreate = values;
            axios.post(`http://todoapi.ritterhaus.net/api/Categories`, categoryToCreate).then(() => {
                props.setShowCreate(false);
                props.getCategories();
            });
        } else {
            //  We'll edit the passed-in category.
            const categoryToEdit = {
                categoryId: props.category.categoryId,
                catName: values.catName,
                catDesc: values.catDesc,
            };

            axios.put(`http://todoapi.ritterhaus.net/api/Categories/${props.category.categoryId}`, categoryToEdit).then(() => {
                props.setShowEdit(false);
                props.getCategories();
            });
        }
    };

    return (
        <Formik
            initialValues={{
                catName: props.category ? props.category.catName : '',
                catDesc: props.category ? props.category.catDesc : '',
            }}
            validationSchema={categorySchema}
            onSubmit={(values) => handleSubmit(values)}>
            {({ errors, touched }) => (
                <Form id='categoryForm' className='row text-center m-auto'>
                    <div className='form-group m-1 p-1'>
                        <Field name='catName' className='form-control' placeholder='Name' />
                        {errors.catName && touched.catName && (
                            <span className='text-danger fw-bold'>{errors.catName}</span>
                        )}
                    </div>
                    <div className='form-group m-1 p-1'>
                        <Field
                            name='catDesc'
                            as='textarea'
                            className='form-control'
                            placeholder='Name'
                            style={{
                                resize: 'none',
                                height: '5em',
                            }}
                        />
                        {errors.catDesc && touched.catDesc && (
                            <span className='text-danger fw-bold'>{errors.catName}</span>
                        )}
                    </div>
                    <div className='form-group m-2'>
                        <button className='btn btn-success' type='submit'>
                            {!props.category ? <span>Add Category</span> : <span>Save Changes</span>}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
