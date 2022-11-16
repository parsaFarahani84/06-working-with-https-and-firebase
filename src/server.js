const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/data", (req, res) => {
  res.json({ name: "parsa", age: "17" });
});

app.listen(3000);
