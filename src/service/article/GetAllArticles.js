const { Article } = require("../../model/Article");

module.exports = async (req, res) => {
  try {
    const articles = await Article.find({});
    res.status(200).send(articles);
  } catch (e) {
    res.status(500).send(e);
  }
};
