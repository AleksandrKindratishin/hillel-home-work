import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h1>TODO Redux-Saga</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default App;
