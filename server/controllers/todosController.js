import Todo from "../models/Todo.js";

//get all todos
const getTodos = async (req, res) => {
  try {
    const getTodos = await Todo.find();
    res.json(getTodos);
  } catch (err) {
    res.json({ message: "error retrieving todos" });
  }
};

//post new todo:
const postTodo = async (req, res) => {
  const todo = new Todo({
    ...req.body,
  });

  try {
    const newTodo = await todo.save();
    res.json(newTodo);
  } catch (err) {
    res.json({ message: "error saving todo" });
  }
};

//modify:
const updateTodo = async (req, res) => {
  console.log(req.params, 'back');
  try {
    const updateTodo = await Todo.updateOne(
      { _id: req.params.id},
      { $set: { "complete": true } }
    );
    res.json(updateTodo);
  } catch (err) {
    res.json({ message: `error updating todo with id ${req.params.id}` });
  }
};

//delete:
const deleteTodo = async (req, res) => {
  try {
    const removeTodo = await Todo.remove({ _id: req.params.id });
    res.json(removeTodo);
  } catch (err) {
    res.json({ message: "error removing todos" });
  }
};

export default {
  getTodos,
  postTodo,
  updateTodo,
  deleteTodo,
};
