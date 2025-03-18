const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// 🟢 Створити TODO
router.post('/todos', async (req, res) => {
    try {
        const newTodo = new Todo({ text: req.body.text });
        await newTodo.save();
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔵 Отримати всі TODO
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🟡 Оновити TODO
router.put('/todos/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔴 Видалити TODO
router.delete('/todos/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Todo deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
