import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        completed: false,
        name: 'Study react',
        user_id:1,
        id: 1
    },
    {
        completed: true,
        name: 'Study C#',
        user_id: 1,
        id: 2
    }
];
const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        // action.type
        //action.payload = todo
        addTodo(state, action){
            console.log(action)
            state.push(action.payload)
        },
        removeTodo(state, action) {

            state = state.filter(todo => todo.id !== action.payload.id);
            return state;

        },
        toggleTodo(state, action) {

            const todo = state.find(todo => todo.id === action.payload.id);
            if(todo){
                todo.completed = !todo.completed
            }
        

        }
    }
});
export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;