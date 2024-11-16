import { Loading } from '../../app/components/Loading';
import { Error } from '../../app/components/Error';

import TodoItem from './TodoItem';
import { useGetTodosQuery} from './todosApi';

const TodoList = ({ listId }) =>{
  
    const { data, error, isLoading } = useGetTodosQuery(listId);
  
    if (isLoading) return <Loading>Loading...</Loading>;
    if (error) return <Error>Error: {error.message}</Error>;
return (
   
        <ul className='list-group'>
            {
            data?.todos.map(todo =>  <TodoItem key={todo.id} todo={todo} />)
            }
        </ul>    
)
}
export default TodoList;