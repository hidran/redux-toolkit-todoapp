import {
    createBrowserRouter,
    Route
   
} from 'react-router-dom';
import App from '../App';
import TodoList from '../features/todos/TodoList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    children:[
    {
        path: 'todos',
        element: <TodoList/>,
    },
    {
        path: 'lists',
        element: <h2>lists</h2>,
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