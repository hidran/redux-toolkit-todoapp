import {
    createBrowserRouter
 
   
} from 'react-router-dom';
import App from '../App';
import TodoList from '../features/todos/TodoList';
import AddList from '../features/lists/AddList';
import Lists from '../features/lists/Lists';
import AddTodo from '../features/todos/AddTodo';
import ListDetails from '../features/lists/ListDetails';
import { Login } from '../features/auth/Login';
import { Register } from '../features/auth/Register';
import ProtectedRoute from '../app/components/ProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    children:[
    {
        path: 'todos',
            element:<ProtectedRoute>
                <div className="mt-3">
                    <AddTodo />
                    <TodoList />
                </div>
            </ProtectedRoute>
    },
    {
        path: 'lists',
        element: <ProtectedRoute>
                <div className="mt-3">
                    <AddList />
                    <Lists />
                </div>
            </ProtectedRoute>,
    },
        {
            path: 'lists/:listId',
            element: <ListDetails/>,
        },
    {
        path: 'login',
        element: <Login/>,
    },
    {
        path: 'register',
        element: <Register/>,
    }
]
    }
]);
export default router;