import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  isAuthenticated: false
};
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginSuccess(state, action){
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        },
        loginFailure(state, action) {
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        logout(state, action) {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        },
        registerSuccess(state, action) {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        },
        registerFailure(state, action) {
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
    }
});
export const { loginSuccess, loginFailure, logout, registerSuccess, registerFailure } = authSlice.actions;
export default authSlice.reducer;