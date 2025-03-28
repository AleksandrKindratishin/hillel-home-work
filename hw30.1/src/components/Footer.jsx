import React from "react";
import { useDispatch } from "react-redux";
import { clearTodos } from "../redux/todoSlice";

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <footer>
            <button onClick={() => dispatch(clearTodos())}>Очистити TODO</button>
        </footer>
    );
};

export default Footer;
