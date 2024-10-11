import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from './todoSlice';
const TodoItem = ({todo}) =>{
    const dispatch = useDispatch();

    const handleToggle = ()=>{
       dispatch(toggleTodo(todo))
    }
    const handleRemove = () => {
        dispatch(removeTodo(todo));
    }
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between"
         key={todo.id}>
            <span onClick={handleToggle}
             style = {{textDecoration: todo.completed? 'line-through': '', cursor:'pointer'}}>
            {todo.name}

            </span>
            <button onClick={handleRemove} className="btn btn-danger"><i className="bi h4 bi-trash"></i></button>
            </li>

    )
}
export default TodoItem;