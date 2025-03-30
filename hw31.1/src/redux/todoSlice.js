import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        fetchTodosRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchTodosSuccess: (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        },
        fetchTodosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addTodoRequest: (state, action) => {
            state.todos.push(action.payload); // Тимчасово додаємо
        },
        removeTodoRequest: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodoRequest: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodoRequest: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
        clearTodosRequest: (state) => {
            state.todos = [];
        },
    },
});

export const {
    fetchTodosRequest,
    fetchTodosSuccess,
    fetchTodosFailure,
    addTodoRequest,
    removeTodoRequest,
    toggleTodoRequest,
    editTodoRequest,
    clearTodosRequest,
} = todoSlice.actions;

export default todoSlice.reducer;
