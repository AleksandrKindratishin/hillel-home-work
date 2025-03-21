// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import "./styles.css";


function App() {
    return (
        <div className="container mt-4">
            <Header />
            <CharacterList />
        </div>
    );
}

export default App;
