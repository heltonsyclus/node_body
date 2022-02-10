const { Router } = require("express");

const UserController = require("./app/controllers/UserController");

const routes = new Router();
//get
routes.get("/layout", UserController.layoutGet);

//post
routes.post("/loginPost", UserController.loginPost);
module.exports = routes;
