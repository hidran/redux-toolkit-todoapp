import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo = () =>{

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const handleAddTodo = (e)=> {
        e.preventDefault();
        const todoName = name.trim();
        if (!todoName){
            return;
        }
        const todo = { name: todoName, completed: false, user_id: 1};
        dispatch(addTodo(todo));
        setName('');
    };
    return (
        <form className="input-group mb-3" onSubmit={handleAddTodo}>
        <input className="form-control"  value= {name} onChange={(e) => setName(e.target.value) }
           placeholder = "Add todo"/>
<button className="btn btn-primary">ADD TODO <i className="bi bi-plus-circle"></i></button>
        </form>
    );
}
export default AddTodo;