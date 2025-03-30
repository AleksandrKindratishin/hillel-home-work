import { put, takeEvery, call } from "redux-saga/effects";
import {
    fetchTodosRequest,
    fetchTodosSuccess,
    fetchTodosFailure,
    addTodoRequest,
    removeTodoRequest,
    toggleTodoRequest,
    editTodoRequest,
    clearTodosRequest,
} from "../todoSlice";

// Симуляція API-запитів
const fakeApi = {
    fetchTodos: async () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    },
    saveTodos: async (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },
};

// ---- САГИ ----

// Отримання завдань
function* fetchTodosSaga() {
    try {
        const todos = yield call(fakeApi.fetchTodos);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure("Помилка завантаження TODO"));
    }
}

// Додавання завдання
function* addTodoSaga(action) {
    const todos = yield call(fakeApi.fetchTodos);
    const newTodos = [...todos, action.payload];
    yield call(fakeApi.saveTodos, newTodos);
    yield put(fetchTodosSuccess(newTodos));
}

// Видалення завдання
function* removeTodoSaga(action) {
    const todos = yield call(fakeApi.fetchTodos);
    const updatedTodos = todos.filter((todo) => todo.id !== action.payload);
    yield call(fakeApi.saveTodos, updatedTodos);
    yield put(fetchTodosSuccess(updatedTodos));
}

// Перемикання виконання
function* toggleTodoSaga(action) {
    const todos = yield call(fakeApi.fetchTodos);
    const updatedTodos = todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
    );
    yield call(fakeApi.saveTodos, updatedTodos);
    yield put(fetchTodosSuccess(updatedTodos));
}

// Редагування завдання
function* editTodoSaga(action) {
    const { id, text } = action.payload;
    const todos = yield call(fakeApi.fetchTodos);
    const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
    );
    yield call(fakeApi.saveTodos, updatedTodos);
    yield put(fetchTodosSuccess(updatedTodos));
}

// Очищення списку
function* clearTodosSaga() {
    yield call(fakeApi.saveTodos, []);
    yield put(fetchTodosSuccess([]));
}

// ---- СПОСТЕРЕЖЕННЯ ----
export function* watchTodos() {
    yield takeEvery(fetchTodosRequest.type, fetchTodosSaga);
    yield takeEvery(addTodoRequest.type, addTodoSaga);
    yield takeEvery(removeTodoRequest.type, removeTodoSaga);
    yield takeEvery(toggleTodoRequest.type, toggleTodoSaga);
    yield takeEvery(editTodoRequest.type, editTodoSaga);
    yield takeEvery(clearTodosRequest.type, clearTodosSaga);
}
