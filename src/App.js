import './App.css';
import NavBar from './app/components/Navbar';
import AddTodo from './features/todos/AddTodo';
import TodoList from './features/todos/TodoList';
function App() {
 
  return (
    <div className="container">
      <NavBar/>
    <div className="row">
      <div className='col-md8'>
        <h1>TODO LIST APP</h1>
        <AddTodo/>
        <TodoList/>
    </div>
    </div>
    </div>
  );
}

export default App;
