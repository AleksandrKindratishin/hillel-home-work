import React from "react";

const EmojiList = ({ emojis, onVote }) => {
    return (
        <div className="d-flex justify-content-center gap-4 mt-4">
            {emojis.map(({ id, emoji, votes }) => (
                <button
                    key={id}
                    className="btn btn-light border rounded-circle p-3"
                    onClick={() => onVote(id)}
                    style={{ fontSize: "2rem" }}
                >
                    {emoji}
                    <div className="mt-2">{votes}</div>
                </button>
            ))}
        </div>
    );
};

export default EmojiList;
