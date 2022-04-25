const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const todoRoutes = require("./routes/todo");
const connectDB = require("./config/db");

const app = express();

connectDB();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(todoRoutes);

app.listen(3000, () => {
    console.log("Server Running");
});
