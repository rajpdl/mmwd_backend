const { Article } = require("../../model/Article");

module.exports = async (req, res) => {
  const {
    description,
    description_in_mm,
    code,
    categoryId,
    isFeatured,
  } = req.body;
  try {
    let updated = false;
    const art = await Article.findById(req.params.id);
    if (art == null) {
      return res.sendStatus(404);
    }
    if (art.description != description) {
      updated = true;
      art.description = description;
    }
    if (art.description_in_mm != description_in_mm) {
      updated = true;
      art.description_in_mm = description_in_mm;
    }
    if (art.code != code) {
      updated = true;
      art.code = code;
    }
    if (art.categoryId != categoryId) {
      updated = true;
      art.categoryId = categoryId;
    }
    if (art.isFeatured != isFeatured) {
      updated = true;
      art.isFeatured = isFeatured;
    }

    if (updated) {
      art.editedAt = Date.now();
      const article = await art.save();
      return res.status(200).send(article);
    } else {
      res.status(200).send(art);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};
