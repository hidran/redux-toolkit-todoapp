import { useState } from 'react';
import { useCreateTodoMutation } from './todosApi';
import { Error } from "../../app/components/Error";

const AddTodo = ({listId}) =>{

    const [name, setName] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [createTodo] = useCreateTodoMutation();
    const handleAddTodo = async (e)=> {
        e.preventDefault();
        try {
            await createTodo({ name, listId }).unwrap();
            setName('');
        } catch (error) {
            setErrorMsg(error.data?.message || "Failed to create todo");
        }
    };
    return (
        <>
        <form className="input-group mb-3" onSubmit={handleAddTodo}>
        <input className="form-control"  value= {name} onChange={(e) => setName(e.target.value) }
           placeholder = "Add todo"/>
<button className="btn btn-primary">ADD TODO <i className="bi bi-plus-circle"></i></button>
        </form>
            {errorMsg && <Error>{errorMsg}</Error> }
        </>
    );
}
export default AddTodo;