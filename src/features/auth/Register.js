import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerFailure, registerUser } from './authSlice';
import { useNavigate } from 'react-router-dom';
export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);
    const navigate = useNavigate();
    const handleRegister = async (e) =>{
        e.preventDefault();
        if(email  && password.length>5 ){
            try {
                await dispatch(registerUser({ email, password, name })).unwrap();
                navigate('/'); 
            } catch (error) {
                console.log(error);
            }
           

        } else {
            dispatch(registerFailure('Registration failed. Password should be at least 6 characters.'));        }
    };
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                       
                        className="form-control"
                        value={name} required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input required
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
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}