import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "../redux/todoSlice";

const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        dispatch(addTodoRequest({ id: Date.now(), text, completed: false }));
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Нове завдання..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    );
};

export default TodoForm;
