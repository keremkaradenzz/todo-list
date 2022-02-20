import express from 'express';
import { getTodos, createTodos , getByIdTodo, deleteTodo, updateTodo} from "../controller/todos.js";

const router = express.Router();

// url:5000/posts


router.get("/", getTodos);
router.post('/', createTodos)
router.get('/:id', getByIdTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id', updateTodo)


export default router;