import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/store";

const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{ border: "1px solid black", padding: "20px", width: "150px", textAlign: "center" }}>
            <h2>Value: {value}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Counter;
