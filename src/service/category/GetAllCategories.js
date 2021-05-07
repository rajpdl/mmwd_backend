const { Category } = require("./../../model/Category");

module.exports = async (req, res) => {
  try {
    const category = await Category.find({}).populate("articles", "title");
    res.status(200).send(category);
  } catch (e) {
    res.status(500).send(e);
  }
};
