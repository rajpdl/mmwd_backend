const express = require("express");

const CreateCategory = require("../service/category/CreateCategory");
const GetAllCategories = require("../service/category/GetAllCategories");
const DeleteCategory = require("../service/category/DeleteCategory");
const ValidateObjectId = require("../middleware/ValidateObjectId");

const app = express.Router();

app.post("/", CreateCategory);

app.get("/all", GetAllCategories);

app.delete("/:id", ValidateObjectId, DeleteCategory);

module.exports = app;
