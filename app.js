express = require("express");
app = express();
const PORT = 80;

app.get("/sayHello", function (req, res) {
  res.json({ message: "Hello User" });
});

app.listen(PORT.gitignoreT, function () {
  console.log(`Server started on port ${PORT}`);
});
