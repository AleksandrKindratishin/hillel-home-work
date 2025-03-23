import Emoji from "./Emoji";

const emojis = [
    { emoji: "😀", name: "smile" },
    { emoji: "😎", name: "cool" },
    { emoji: "😍", name: "love" },
    { emoji: "🤣", name: "laugh" },
    { emoji: "🤩", name: "star" },
];

const EmojiList = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            {emojis.map((e) => (
                <Emoji key={e.name} emoji={e.emoji} name={e.name} />
            ))}
        </div>
    );
};

export default EmojiList;
