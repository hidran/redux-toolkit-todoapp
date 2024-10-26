import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = () =>{
    const todos = useSelector(state => state.todos);
return (
    <div>
        <AddTodo />
        <ul className='list-group'>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            }
        </ul>
    </div>
)
}
export default TodoList;