const { Article } = require("../../model/Article");

module.exports = async (req, res) => {
  const { title, description, description_in_mm, code, categoryId } = req.body;
  try {
    const article = new Article({
      title,
      description,
      description_in_mm,
      code,
      categoryId,
    });
    const takenTitle = await Article.findOne({ title });
    if (takenTitle == null) {
      const result = await article.save();
      return res.status(200).send(result);
    }
    res.status(400).send({ error: "Title Already Taken" });
  } catch (e) {
    res.status(500).send(e);
  }
};
