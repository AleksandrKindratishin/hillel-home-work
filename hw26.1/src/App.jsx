import EmojiList from "./components/EmojiList";
import Results from "./components/Results";

const App = () => {
    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h1>Голосування за найкращий смайлик</h1>
            <EmojiList />
            <Results />
        </div>
    );
};

export default App;
