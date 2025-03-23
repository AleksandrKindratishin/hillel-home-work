import { useState } from "react";

const Results = () => {
    const [winner, setWinner] = useState(null);

    const showResults = () => {
        const allVotes = Object.keys(localStorage).map((key) => ({
            name: key,
            votes: parseInt(localStorage.getItem(key)),
        }));

        if (allVotes.length === 0) return;

        const maxVotes = Math.max(...allVotes.map((e) => e.votes));
        const winnerEmoji = allVotes.find((e) => e.votes === maxVotes);
        setWinner(winnerEmoji);
    };

    const clearResults = () => {
        localStorage.clear();
        setWinner(null);
        window.location.reload();
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={showResults} style={{ margin: "5px", padding: "10px", fontSize: "1rem" }}>
                Show Results
            </button>
            <button onClick={clearResults} style={{ margin: "5px", padding: "10px", fontSize: "1rem" }}>
                Clear Results
            </button>
            {winner && (
                <div>
                    <h2>Переможець:</h2>
                    <h1 style={{ fontSize: "3rem" }}>{winner.name} ({winner.votes} голосів)</h1>
                </div>
            )}
        </div>
    );
};

export default Results;
