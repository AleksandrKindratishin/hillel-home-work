import React, { useState, useEffect } from "react";
import EmojiList from "./components/EmojiList";
import Results from "./components/Results";

const initialEmojis = [
    { id: 1, emoji: "😃", votes: 0 },
    { id: 2, emoji: "😊", votes: 0 },
    { id: 3, emoji: "😎", votes: 0 },
    { id: 4, emoji: "🤩", votes: 0 },
    { id: 5, emoji: "😍", votes: 0 },
];

const App = () => {
    const [emojis, setEmojis] = useState(() => {
        const savedVotes = localStorage.getItem("emojiVotes");
        return savedVotes ? JSON.parse(savedVotes) : initialEmojis;
    });

    useEffect(() => {
        localStorage.setItem("emojiVotes", JSON.stringify(emojis));
    }, [emojis]);

    const handleVote = (id) => {
        setEmojis((prev) =>
            prev.map((emoji) =>
                emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
            )
        );
    };

    const clearVotes = () => {
        setEmojis(initialEmojis);
        localStorage.removeItem("emojiVotes");
    };

    return (
        <div className="container text-center mt-5">
            <h1>Голосування за найкращий смайлик</h1>
            <EmojiList emojis={emojis} onVote={handleVote} />
            <Results emojis={emojis} onClear={clearVotes} />
        </div>
    );
};

export default App;
