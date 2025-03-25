import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const validationSchema = Yup.object({
        task: Yup.string().min(5, "Мінімум 5 символів").required("Обов'язкове поле"),
    });

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
            <h2>TODO List</h2>
            <Formik
                initialValues={{ task: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    setTodos([...todos, values.task]);
                    resetForm();
                }}
            >
                <Form>
                    <Field name="task" placeholder="Введіть завдання..." />
                    <ErrorMessage name="task" component="div" style={{ color: "red" }} />
                    <button type="submit">Додати</button>
                </Form>
            </Formik>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
