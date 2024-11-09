import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from './listsSlice';
import { useCreateListMutation } from './listsApi';
import { Error } from '../../app/components/Error';
function AddList() {
    const [name, setName] = useState('');
    const mutation = useCreateListMutation();
    console.log(mutation)
    const [createList, {isLoading,isError,isSuccess}] = useCreateListMutation();
    const [error, setError] = useState('');
    const handleAddList = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        const newList = {          
            name
        };
        try {
            await createList(newList);
        } catch (error) {
            setError(error.message)
        }
      
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
            {error ?<Error>error</Error>: null}
        </form>
    );
}

export default AddList;
