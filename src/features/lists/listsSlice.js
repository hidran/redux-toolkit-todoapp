import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'Work', user_id: 1, created_at: new Date().toISOString() },
    { id: 2, name: 'Personal', user_id: 2, created_at: new Date().toISOString() },
];

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: (state, action) => {
            state.unshift(action.payload);
        },
        removeList: (state, action) => {
            return state.filter(list => list.id !== action.payload.id);
        },
    },
});

export const { addList, removeList } = listsSlice.actions;
export default listsSlice.reducer;
