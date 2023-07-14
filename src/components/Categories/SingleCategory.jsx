import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import CategoryEdit from './CategoryEdit';
import axios from 'axios';
import { CiEdit, CiSquareRemove } from 'react-icons/ci';


export default function SingleCategory(props) {
    const { catName, catDesc } = props.category;
    const [showEdit, setShowEdit] = useState(false);
    const { currentUser } = useAuth();

    const deleteCategory = (id) => {
        if (window.confirm(`Are you sure that you want to delete ${props.category.catName}`)) {
            axios.delete(`http://todoapi.ritterhaus.net/api/Categories/${id}`).then(() => props.getCategories());
        }
    };


    return (
        <tr>
            <td>{catName}</td>
            <td>{catDesc}</td>
            {/* BEGIN EDIT UI */}
            {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && (
                <td>
                    <button className='m-1' id='editLink' onClick={() => setShowEdit(true)}>
                        <CiEdit />
                    </button>
                    <button className='m-1' id='deleteLink' onClick={() => deleteCategory(props.category.categoryId)}>
                        <CiSquareRemove />
                    </button>
                    {showEdit && (
                        <CategoryEdit
                            setShowEdit={setShowEdit}
                            showEdit={showEdit}
                            category={props.category}
                            getCategories={props.getCategories}
                        />
                    )}
                </td>
            )}
            {/* END EDIT UI */}
        </tr>
    );
}
