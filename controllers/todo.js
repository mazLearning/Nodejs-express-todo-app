const Todo = require("./../models/single-todo");
exports.getAllTodo = async (req, res) => {
    try {
        const todoList = await Todo.find();
        res.render("index", {
            pageTitle: "Todo Application",
            todoList: todoList,
        });
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

exports.createTodo = async (req, res) => {
    try {
        const todoTitle = req.body.todoTitle;
        await Todo.create({ title: todoTitle });
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

exports.deleteOneTodo = async (req, res) => {
    try {
        const todoId = req.body.todoId;
        const todo = await Todo.deleteOne({ _id: todoId });
        console.log(todo);
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

exports.completedTodo = async (req, res) => {
    try {
        const todoId = req.body.todoId;
        await Todo.findOneAndUpdate({ _id: todoId }, { complete: true });
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};
