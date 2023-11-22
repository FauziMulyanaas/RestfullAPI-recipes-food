const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const recipes = require("./router/recipes");
const users = require("./router/users");
const category = require("./router/category");
const auth = require("./router/auth");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Cache-Control', 'no-store');
  next();
});


app.use(express.urlencoded({ extended: false }));



app.use(express.json());
app.use("/recipe", recipes);
app.use("/user", users);
app.use("/auth", auth);
app.use("/category", category);

app.listen(port, () => {
  console.log(`Example appp listening on port ${port}`);
});
