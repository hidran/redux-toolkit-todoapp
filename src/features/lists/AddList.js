import React, { useState } from 'react';
import { useCreateListMutation } from './listsApi';
import { Error } from '../../app/components/Error';

function AddList() {
    const [name, setName] = useState('');
    const [errorMsg, setError] = useState('');
    const [createList, { isLoading, isError }] = useCreateListMutation();

    const handleAddList = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        const newList = { name };
        try {
            await createList(newList).unwrap(); // Usa unwrap per gestire l'errore nel catch
            setName(''); // Resetta il campo input solo se la mutazione è riuscita
            setError(''); // Pulisci il messaggio di errore in caso di successo
        } catch (error) {
            setError(error.data?.message || "An error occurred"); // Mostra l'errore ricevuto
        }
    };

    return (
        <>
            <form className="input-group mb-3" onSubmit={handleAddList}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new list..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="btn btn-primary" type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <i className="bi bi-hourglass-split"></i> // Icona di caricamento
                    ) : (
                        <i className="bi bi-plus-circle"></i> // Icona aggiungi
                    )}
                </button>
            </form>
            {isError && <Error>{errorMsg}</Error>}
        </>
    );
}

export default AddList;
