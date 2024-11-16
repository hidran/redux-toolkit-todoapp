import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authServices';
const initialState = {
  user: null,
  error: null,
  isAuthenticated: false,
  loading: false,
  token:localStorage.getItem('token')
};
 const {register, login} = authService;
export const registerUser = createAsyncThunk('auth/register',
    async(userData,thunkApi)=>{
        try{
            const response = await register(userData);
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('tokeExpires', response.data.expiresAt);
            return response.data;
        }catch(error){
            console.log(error);
            return thunkApi.rejectWithValue(error);
        }

    }
);
export const loginUser = createAsyncThunk('auth/login',
    async (userData, thunkApi) => {
        try {
            const response = await login(userData);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('tokeExpires', response.data.expiresAt);
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue(error);
        }

    }
);
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.expiresAt = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token'); // Rimuove il token al logout
        },
        loginFailure(state, action) {
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
       
       
        registerFailure(state, action) {
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state,action) =>{
            state.loading = true;
            state.error = null;
            state.isAuthenticated = false;
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload.response.data.message || 'Registration failed';
            })
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.isAuthenticated = false;
            }).addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                console.log(action.payload)
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                console.log(action.payload);
                state.error = action.payload.response.data.message || 'Login failed';
            })
    }
    
});
export const {  logout, loginFailure, registerFailure } = authSlice.actions;
export default authSlice.reducer;