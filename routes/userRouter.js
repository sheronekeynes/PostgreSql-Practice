const { Router } = require("express");

const userRouter = Router();

const userController = require("../controllers/userController");

userRouter.get("/", userController.showUser);

userRouter.post("/", userController.createUser);

module.exports = userRouter;
