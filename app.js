const express = require("express");
const app = express();
const port = 3000;

app.get("/sayHello", (req, res) => {
  res.json({ message: "Hello User" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
