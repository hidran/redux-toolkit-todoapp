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
    const spanStyle = { textDecoration: todo.completed ? 'line-through' : '', cursor: 'pointer' };
   
    const checkboxStyle =  todo.completed ? 'bi-check-square' : 'bi-square' ;
 return (
        <li className="list-group-item d-flex align-items-center justify-content-between"
         key={todo.id}>
            <span onClick={handleToggle}
             style = {spanStyle}>
            <button className="btn"><i className={`bi ${checkboxStyle}`} ></i></button>
            {todo.name}

            </span>
            <button onClick={handleRemove} className="btn btn-danger"><i className="bi h4 bi-trash"></i></button>
            </li>

    )
}
export default TodoItem;