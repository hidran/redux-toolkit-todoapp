import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteListMutation, useUpdateListMutation } from './listsApi';
import { Loading } from '../../app/components/Loading';
import { Error } from '../../app/components/Error';

function ListItem({ list }) {
    const [updateList, { isError: isUpdateError, isLoading: isUpdateLoading }] = useUpdateListMutation();
    const [deleteList, { isError: isDeleteError, isLoading: isDeleteLoading }] = useDeleteListMutation();

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(list.name);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRemove = async () => {
        try {
            await deleteList(list.id).unwrap();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleEdit = () => setIsEditing(true);

    const handleNavigate = () => {
        if (!isEditing) navigate(`/lists/${list.id}?listName=${encodeURIComponent(list.name)}`);
    };

    const handleCancel = () => {
        setName(list.name);
        setIsEditing(false);
    };

    const handleSave = async () => {
        try {
            await updateList({ id: list.id, name }).unwrap();
            setIsEditing(false);
        } catch (err) {
            setError(err.data?.error?.message || err.message);
        }
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
                {isEditing ? (
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                ) : (
                    <>
                        <strong>{list.name}</strong> <br />
                        <small>Created at: {new Date(list.created_at).toLocaleString()}</small>
                    </>
                )}
            </div>
            <div className="d-flex ms-3 align-items-center">
                {!isEditing ? (
                    <>
                        <button className="btn btn-primary me-3" title="Edit list" onClick={handleEdit}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                        <button className="btn btn-success me-3" title="View todos" onClick={handleNavigate}>
                            <i className="bi bi-info-square"></i>
                        </button>
                        <button className="btn btn-danger" title="Remove list" onClick={handleRemove}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </>
                ) : (
                    <>
                        <button title="Save" className="btn btn-primary me-2" onClick={handleSave}>
                            <i className="bi bi-floppy-fill"></i>
                        </button>
                        <button title="Back to list" className="btn btn-secondary" onClick={handleCancel}>
                            <i className="bi bi-x-square-fill"></i>
                        </button>
                    </>
                )}
            </div>
            {(isUpdateLoading || isDeleteLoading) && <Loading />}
            {(error || isUpdateError || isDeleteError) && <Error>{error || "An error occurred"}</Error>}
        </li>
    );
}

export default ListItem;
