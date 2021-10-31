const express = require('express');
const routes = express.Router();
const user = require('../controllers/userControllers')

routes.post("/createUser", user.createUser)
routes.get("/getUser/:id", user.getUser)
routes.get("/getAllUsers", user.getAllUsers)
routes.put("/editUser/:id", user.editUser)
routes.delete("/deleteUser/:id", user.deleteUser)

module.exports = routes;