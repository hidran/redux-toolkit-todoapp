import React from 'react';
import { useDispatch } from 'react-redux';
import { removeList } from './listsSlice';
import { useNavigate } from 'react-router-dom';

function ListItem({ list }) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeList({ id: list.id }));
    };
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/lists/${list.id}?listName=${encodeURIComponent(list.name)}`)
    };
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div onClick={handleNavigate} style={{cursor:'pointer'}}>
                <strong>{list.name}</strong> <br />
                <small>Created at: {new Date(list.created_at).toLocaleString()}</small>
            </div>
            <button className="btn btn-danger btn-sm" onClick={handleRemove}>
                <i className="bi bi-trash"></i> {/* Bootstrap icon */}
            </button>
        </li>
    );
}

export default ListItem;
