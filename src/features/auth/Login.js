import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {loginUser,loginFailure}  from './authSlice';
import { useNavigate } from 'react-router-dom';

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);
    const navigate = useNavigate();
    const handleLogin = async (e) =>{
        e.preventDefault();
        if(email  && password){
            try {
                await dispatch(loginUser({ email, password })).unwrap();
                navigate('/');
            } catch (error) {
                console.log(error);
            }
          

        } else {
            dispatch(loginFailure('Invalid email or password'))
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}