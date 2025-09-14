const express = require("express");
const app = express();

const path = require("path");

app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const port = 3000;

const userRouter = require("./routes/userRouter");
const showUsersRouter = require('./routes/showUsersRouter')
// show all user names
app.use('/',showUsersRouter);

app.use("/new", userRouter);

app.listen(port, (error) => {
  if (error) {
    throw error;
  }

  console.log("Server started successfully...");
});
