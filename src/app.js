const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/static_config');
const ArticleController = require('./controller/ArticleController');
const CategoryController = require('./controller/CategoryController');
const UserController = require('./controller/UserController');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});
app.use(express.static('public'));

app.use('/article', ArticleController);
app.use('/category', CategoryController);
app.use('/user', UserController);

app.listen(PORT, () => {
    console.log(`Starting the server on port ${PORT}`);
})