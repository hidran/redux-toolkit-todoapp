import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        completed: false,
        name: 'Study react',
        user_id:1,
        id: (new Date()).getTime()
    },
    {
        completed: true,
        name: 'Study C#',
        user_id: 1,
        id: Math.random()
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

        },
        toggleTodo(state, action) {
            state = state.map(todo => {
                if (todo.id === action.payload.id){
                    todo.completed = !todo.completed;
                }
                return todo;
            });

        }
    }
});
export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;