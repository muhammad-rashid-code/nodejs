import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  console.log("req=>", req);
  res.send("Hello BackEnd First Server! and API This Is Get Request");
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
