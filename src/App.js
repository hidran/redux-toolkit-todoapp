import './App.css';
import {  useSelector } from 'react-redux';
import AddTodo from './features/todos/AddTodo';
function App() {
  const todos = useSelector(state => state.todos);
  return (
    <div className='container'>
    <div className="row">
      <div className='col-md8'>
    <h1>TODO LIST APP</h1>
    <AddTodo/>
    <ul className='list-group'>
     {
      todos.map(todo => <li className='list-group-item' key={todo.id}>{todo.name}</li>)
     }
      </ul>
    </div>
    </div>
    </div>
  );
}

export default App;
