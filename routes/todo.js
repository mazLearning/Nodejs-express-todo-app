const express = require("express");
const router = express.Router();
const todoControllers = require("./../controllers/todo");

router.get("/", todoControllers.getAllTodo);

router.post("/", todoControllers.createTodo);
router.post("/todo/delete", todoControllers.deleteOneTodo);
router.post("/todo/complete", todoControllers.completedTodo);
module.exports = router;
