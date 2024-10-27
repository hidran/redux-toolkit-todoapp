import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        completed: false,
        name: 'Study react',
        list_id:1,
        id: 1
    },
    {
        completed: true,
        name: 'Study C#',
        list_id: 1,
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
            state.unshift(action.payload)
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
        

        },
        updateTodo(state, action) {

            const { id, name, completed } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.name = name;
                todo.completed = completed;
            }


        }
    }
});
export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;