const authMiddleware = require("../middleware/auth");

const Todo = require("../models/todo");
const express = require("express");
const Joi = require("joi");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let todos = await Todo.find().sort({ date: -1 });
    // console.log(req.user);
    res.send(todos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3).max(30),
    id: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const t = req.body;
  try {
    let todo = await Todo.create(t);
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3).max(30),
    id: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send("Todo not found...");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updatedTodo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send("todo not found...");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        isComplete: !todo.isComplete,
      },
      { new: true }
    );
    res.send(updatedTodo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send("todo not found...");
    }

    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.send(deletedTodo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
