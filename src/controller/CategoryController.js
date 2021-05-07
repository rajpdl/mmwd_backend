const express = require("express");

const CreateCategory = require("../service/category/CreateCategory");
const GetAllCategories = require("../service/category/GetAllCategories");
const DeleteUser = require("../service/user/DeleteUser");
const ValidateObjectId = require("../middleware/ValidateObjectId");

const app = express.Router();

app.post("/", CreateCategory);

app.get("/all", GetAllCategories);

app.delete("/:id", ValidateObjectId, DeleteUser);

module.exports = app;
