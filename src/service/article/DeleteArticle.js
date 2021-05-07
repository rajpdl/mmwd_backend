const { Article } = require("../../model/Article");

module.exports = async (req, res) => {
  try {
    const art = await Article.findByIdAndDelete(req.params.id);
    if (art == null) {
      return res.sendStatus(404);
    }
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e);
  }
};
