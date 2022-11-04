const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

const todos = require("./routes/todos");

const signup = require("./routes/signUp");

const signin = require("./routes/signIn");

app.use(cors());
app.use(express.json());
app.use("/api/todos", todos);
app.use("/api/signup", signup);
app.use("/api/signin", signin);

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome express");
});

const connection_string = process.env.CONNECTION_STRING;

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

mongoose
  .connect(connection_string)
  .then(() => console.log("Mongoose connection done"))
  .catch((error) => console.log(error.message));
