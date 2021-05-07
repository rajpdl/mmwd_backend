const express = require("express");

const CreateUser = require("../service/user/CreateUser");
const DeleteUser = require("../service/user/DeleteUser");
const GetAllUser = require("../service/user/GetAllUser");
const UpdateUser = require("../service/user/UpdateUser");
const ValidateObjectId = require("../middleware/ValidateObjectId");

const app = express.Router();

app.post("/", CreateUser);

app.get("/all", GetAllUser);

app.post("/:id", ValidateObjectId, UpdateUser);

app.delete("/:id", ValidateObjectId, DeleteUser);

module.exports = app;
