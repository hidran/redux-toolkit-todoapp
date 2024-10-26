import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from './listsSlice';

function AddList() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleAddList = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        const newList = {
            id: Math.random(),
            name,
            user_id: 1, // Set a fixed user ID for now (could be dynamic)
            created_at: new Date().toISOString(),
        };

        dispatch(addList(newList));
        setName('');
    };

    return (
        <form className="input-group mb-3" onSubmit={handleAddList}>
            <input
                type="text"
                className="form-control"
                placeholder="Add a new list..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
                <i className="bi bi-plus-circle"></i> {/* Bootstrap icon */}
            </button>
        </form>
    );
}

export default AddList;
