const express = require("express");
const todoModel = require("./schema");
const db = require("./db");
const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  todoModel
    .find({})
    .then((resl) => {
      res.json(resl);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;
  //task = req.body.task
  //description= req.body.description
  const todo = new todoModel({
    task,
    description,
    deadline,
    isCompleted,
    priority,
  });
  todo
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/completed", (res, req) => {
  todoModel
    .find({ isCompleted: true })
    .then((resl) => {
      res.send(resl);
    })
    .catch((err) => {
      res.sen(err);
    });
});
app.put("/update/todo/:task", (req, res) => {
  const task1 = req.params.task;
  const { task, description, deadline, isCompleted, priority } = req.body;

  todoModel
    .findOneAndUpdate(
      { task: task1 },
      { task, description, deadline, isCompleted, priority },
      { new: true }
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.delete("/delete/todo/", (req, res) => {
  const task = req.query.task;
  todoModel
    .findOneAndDelete({ task: task })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
