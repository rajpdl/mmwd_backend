const express = require("express");

const CreateArticle = require("../service/article/CreateArticle");
const DeleteArticle = require("../service/article/DeleteArticle");
const GetAllArticles = require("../service/article/GetAllArticles");
const UpdateArticle = require("../service/article/UpdateArticle");
const ValidateObjectId = require("../middleware/ValidateObjectId");

const app = express.Router();

app.post("/", CreateArticle);

app.get("/all", GetAllArticles);

app.post("/:id", ValidateObjectId, UpdateArticle);

app.delete("/:id", ValidateObjectId, DeleteArticle);

module.exports = app;
