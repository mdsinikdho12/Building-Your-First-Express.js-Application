const express = require("express");

const app = express();
const PORT = 8080;

//Routing http requst
// Middleare configuration
// Rendering views(templete engine)

app.get("/", (req, res) => {
  res.send("Home page ");
});

app.get("/api/users", (req, res) => {
  res.json({
    users: [],
  });
});

app.get("/api/users/:userid", (req, res) => {
  console.log(req.params);
  console.log(req.headers);
  console.log(req.path);
  console.log(req.query); // query param  ? id =1
  console.log(req.params); // query param
  console.log(req.method);
  console.log(req.body);
  res.send("HELLO ");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
