import {createSlice, createEntityAdapter} from '@reduxjs/toolkit'

export const todoAdapter = createEntityAdapter();

export const todoSelectors = todoAdapter.getSelectors(state => state.todos);

export const todoSlice = createSlice({
    name: 'todos',
    initialState: todoAdapter.getInitialState(),
    reducers: {
        addTodo: todoAdapter.addOne,
        addTodos: todoAdapter.addMany,
        removeTodo: todoAdapter.removeOne,
        updateTodo: todoAdapter.updateOne,
        toggleTodo: (state, action) => {
            const todo = state.entities[action.payload];
            todo.completed = !todo.completed;
        }
        
    }
})

export const {addTodo, addTodos} = todoSlice.actions;

export default todoSlice.reducer;
