import AddTodo from '../todos/AddTodo';
import TodoList from '../todos/TodoList';
import { useParams, useSearchParams } from 'react-router-dom';

export default function ListDetails(){
    const { listId } = useParams();
    const listNum = Number(listId);
    const [searchParams] = useSearchParams();
    const listName = searchParams.get('listName') ;
  
    return (
        <>
        <h2> Todo lists for {listName}( {listId})</h2>
            <AddTodo listId={listNum} />
            <TodoList listId={listNum} />
        </>
    );
}