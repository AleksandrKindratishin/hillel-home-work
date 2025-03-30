import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosRequest, clearTodosRequest } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos, loading, error } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodosRequest());
    }, [dispatch]);

    if (loading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка: {error}</p>;

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <button onClick={() => dispatch(clearTodosRequest())}>Очистити список</button>
        </div>
    );
};

export default TodoList;
