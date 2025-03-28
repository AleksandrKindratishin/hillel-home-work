import React from "react";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <h1>SWAPI TODO</h1>
            <TodoList />
            <Footer />
        </div>
    );
};

export default App;
