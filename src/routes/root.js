import {
    createBrowserRouter
 
   
} from 'react-router-dom';
import App from '../App';
import TodoList from '../features/todos/TodoList';
import AddList from '../features/lists/AddList';
import Lists from '../features/lists/Lists';
import AddTodo from '../features/todos/AddTodo';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    children:[
    {
        path: 'todos',
            element: <div className="mt-3">
                <AddTodo />
                <TodoList />
            </div>
    },
    {
        path: 'lists',
        element: (
            <div className="mt-3">
                <AddList />
                <Lists />
            </div>
        ),
    },
    {
        path: 'login',
        element: <h2>Login</h2>,
    },
    {
        path: 'register',
        element: <h2>Register</h2>,
    }
]
    }
]);
export default router;