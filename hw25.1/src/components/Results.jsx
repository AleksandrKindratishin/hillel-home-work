import React from "react";

const Results = ({ emojis, onClear }) => {
    const maxVotes = Math.max(...emojis.map((e) => e.votes));
    const winner = emojis.find((e) => e.votes === maxVotes && maxVotes > 0);

    return (
        <div className="mt-5">
            <button className="btn btn-success px-4 py-2" onClick={() => window.alert(`Переможець: ${winner ? winner.emoji : "Немає голосів"}`)}>
                Show Results
            </button>
            <button className="btn btn-danger px-4 py-2 ms-3" onClick={onClear}>
                Очистити результати
            </button>
            {winner && (
                <div className="mt-4">
                    <h3>Переможець:</h3>
                    <span style={{ fontSize: "3rem" }}>{winner.emoji}</span>
                    <p>Кількість голосів: {winner.votes}</p>
                </div>
            )}
        </div>
    );
};

export default Results;
