import { useState, useEffect } from "react";

const Emoji = ({ emoji, name }) => {
    const [votes, setVotes] = useState(() => {
        return parseInt(localStorage.getItem(name)) || 0;
    });

    useEffect(() => {
        localStorage.setItem(name, votes);
    }, [votes, name]);

    return (
        <div style={{ textAlign: "center", margin: "10px" }}>
      <span style={{ fontSize: "2rem", cursor: "pointer" }} onClick={() => setVotes(votes + 1)}>
        {emoji}
      </span>
            <div>{votes}</div>
        </div>
    );
};

export default Emoji;
