const { Category } = require("../../model/Category");

module.exports = async (req, res) => {
  const { name, name_in_mm } = req.body;
  try {
    const takenName = await Category.findOne({ name });
    if (takenName == null) {
      const cate = new Category({ name, name_in_mm });
      const result = await cate.save();
      return res.status(200).send(result);
    }
    res.status(400).send({error: "Name already taken."});
  } catch (e) {
    res.status(500).send(e);
  }
};
