import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) =>{
   const state = useSelector(state => state.auth);
  
    const isAuthenticated = state.isAuthenticated && state.token;
    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }
    return children;
}
export default ProtectedRoute;