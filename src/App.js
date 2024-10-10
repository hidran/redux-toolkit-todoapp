import './App.css';
import {  useSelector } from 'react-redux';
function App() {
  const todos = useSelector(state => state.todos);
  return (
    <div className="App">
    <h1>TODO LIST APP</h1>
    <ul className='list-group list-group-flush'>
     {
      todos.map(todo => <li key={todo.id}>{todo.name}</li>)
     }
      </ul>
    </div>
  );
}

export default App;
