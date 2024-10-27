import React from 'react';
import { useDispatch } from 'react-redux';
import { removeList } from './listsSlice';
import { useNavigate } from 'react-router-dom';

function ListItem({ list }) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeList({ id: list.id }));
    };
    const handleEdit = () => {
        //dispatch(removeList({ id: list.id }));
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
            <div className= "d-flex ms-3 align-items-center">
                <button className="btn btn-primary me-3" title="Edit list" onClick={handleEdit}>
                    <i className="bi bi-pencil-square"></i> 
                </button>
                <button className="btn btn-success  me-3" title ="View todos" onClick={handleNavigate}>
                    <i className="bi bi-info-square"></i> 
                </button>
            <button className="btn btn-danger" title="remove lists" onClick={handleRemove}>
                <i className="bi bi-trash"></i> 
            </button>
            </div>
        </li>
    );
}

export default ListItem;
