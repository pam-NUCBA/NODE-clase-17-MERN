import express from "express";
import todosController from "../controllers/todosController.js";

const router = express.Router();
const { getTodos, postTodo, updateTodo, deleteTodo } = todosController;

router.get("/", getTodos);
router.post("/", postTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
