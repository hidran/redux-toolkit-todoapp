import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ listId }) =>{
  
    const todos = useSelector(state => state.todos);
    const litsTodos = todos.filter(todo => todo.list_id === listId);
    
return (
   
        <ul className='list-group'>
            {
            litsTodos.map(todo =>  <TodoItem key={todo.id} todo={todo} />)
            }
        </ul>    
)
}
export default TodoList;