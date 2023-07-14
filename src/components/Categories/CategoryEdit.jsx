import React from 'react';
import { Modal } from 'react-bootstrap';
import CategoryForm from './CategoryForm';

export default function CategoryEdit(props) {
    return (
        <Modal show={props.setShowEdit} onHide={() => props.setShowEdit(false)} size='lg'>
            <Modal.Header>
                <h3>Editing {props.category.catName}</h3>
            </Modal.Header>
            <Modal.Body>
                <CategoryForm
                    getCategories={props.getCategories}
                    setShowEdit={props.setShowEdit}
                    category={props.category}
                />
            </Modal.Body>
        </Modal>
    );
}
