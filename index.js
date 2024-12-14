const tasks = [
  { id: 1, task: "sona ni ha." },
  { id: 1, task: "Jagna ha." },
  { id: 1, task: "Concept samajna ha." },
];
import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  console.log("req=>", req);
  res.status(200).send(tasks);
});

app.post("/", (req, res) => {
  console.log("req=>", req);
  res.send("Hello BackEnd First Server! and API This Is Post Request");
});

app.put("/", (req, res) => {
  console.log("req=>", req);
  res.send("Hello BackEnd First Server! and API This Is Put Request");
});

app.listen(PORT, () => console.log("Sever is Runnnig at PORT " + PORT));
