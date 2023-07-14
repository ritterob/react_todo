import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { FaEdit } from 'react-icons/fa';
import CategoryEdit from './CategoryEdit';

export default function SingleCategory(props) {
    const { catName, catDesc } = props.category;
    const [showEdit, setShowEdit] = useState(false);
    const { currentUser } = useAuth();

    return (
        <tr>
            <td>{catName}</td>
            <td>{catDesc}</td>
            {/* BEGIN EDIT UI */}
            {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && (
                <td>
                    <button className='m-1' id='editLink' onClick={() => setShowEdit(true)}>
                        <FaEdit />
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
