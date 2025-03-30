import { useDispatch } from "react-redux";
import {
    removeTodoRequest,
    toggleTodoRequest,
    editTodoRequest,
} from "../redux/todoSlice";
import { useState } from "react";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        dispatch(editTodoRequest({ id: todo.id, text: newText }));
        setIsEditing(false);
    };

    return (
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodoRequest(todo.id))}
            />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={handleEdit}>Зберегти</button>
                </>
            ) : (
                <>
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
          </span>
                    <button onClick={() => setIsEditing(true)}>Редагувати</button>
                </>
            )}
            <button onClick={() => dispatch(removeTodoRequest(todo.id))}>Видалити</button>
        </li>
    );
};

export default TodoItem;
