const { Router } = require("express");

const showUsersRouter = Router();


const userController = require("../controllers/userController");

showUsersRouter.get('/',userController.getUsernames)

module.exports = showUsersRouter