import TodoItem from './TodoItem';
import { useGetTodosQuery} from './todosApi';

const TodoList = ({ listId }) =>{
  
    const { data, error, isLoading } = useGetTodosQuery(listId);
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
return (
   
        <ul className='list-group'>
            {
            data?.todos.map(todo =>  <TodoItem key={todo.id} todo={todo} />)
            }
        </ul>    
)
}
export default TodoList;