const express = require("express");
const todoModel = require("./schema");
const db = require("./db");
const model = require("./schema");
const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {});
app.post("/create/todo", (req, res) => {});
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
