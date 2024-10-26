import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo = ({listId}) =>{

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const id = useSelector(state => state.todos.length +1);
    const handleAddTodo = (e)=> {
        e.preventDefault();
        const todoName = name.trim();
        if (!todoName){
            return;
        }
        const todo = {id, name: todoName, completed: false, list_id: listId};
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