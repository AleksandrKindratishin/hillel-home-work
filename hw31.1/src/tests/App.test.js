// src/__tests__/App.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/reducers'; // Редуктори вашого додатку
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../redux/sagas'; // Саги для обробки side-effects
import App from '../App';

// Налаштування стору з Redux-Saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

describe('TODO App Tests', () => {

    // Тест 1: Перевірка наявності заголовку "TODO"
    test('Page should have a title "TODO"', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const title = screen.getByText(/todo/i);
        expect(title).toBeInTheDocument();
    });

    // Тест 2: Перевірка, чи можна вводити цифри та букви в поле для вводу
    test('Input field should accept letters and numbers', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const input = screen.getByPlaceholderText(/enter task/i);
        fireEvent.change(input, { target: { value: '123' } });
        expect(input.value).toBe('123');
        fireEvent.change(input, { target: { value: 'Test task' } });
        expect(input.value).toBe('Test task');
    });

    // Тест 3: Перевірка, що не можна додавати завдання без тексту
    test('Should show an error when adding an empty task', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const input = screen.getByPlaceholderText(/enter task/i);
        const addButton = screen.getByText(/add/i);
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(addButton);

        // Тут перевіряємо, що спрацьовує помилка або відсутність доданого завдання
        await waitFor(() => {
            expect(screen.queryByText(/task is required/i)).toBeInTheDocument();
        });
    });

    // Тест 4: Перевірка, що після введення тексту завдання додається
    test('Should add a new task to the list when a task is entered', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const input = screen.getByPlaceholderText(/enter task/i);
        fireEvent.change(input, { target: { value: 'Test Task' } });
        const addButton = screen.getByText(/add/i);
        fireEvent.click(addButton);

        // Перевірка, чи додане нове завдання
        await waitFor(() => {
            expect(screen.getByText('Test Task')).toBeInTheDocument();
        });
    });

    // Тест 5: Перевірка, що завдання можна видалити
    test('Should delete task when clicking delete button', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const input = screen.getByPlaceholderText(/enter task/i);
        fireEvent.change(input, { target: { value: 'Task to Delete' } });
        const addButton = screen.getByText(/add/i);
        fireEvent.click(addButton);

        // Перевіряємо, чи завдання додано
        await waitFor(() => {
            expect(screen.getByText('Task to Delete')).toBeInTheDocument();
        });

        // Натискаємо на кнопку "Видалити" (у вашому компоненті повинна бути така кнопка)
        const deleteButton = screen.getByText(/delete/i); // Кнопка повинна бути в компоненті
        fireEvent.click(deleteButton);

        // Перевіряємо, чи завдання видалено
        await waitFor(() => {
            expect(screen.queryByText('Task to Delete')).not.toBeInTheDocument();
        });
    });
});
