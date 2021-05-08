const { Category } = require("./../../model/Category");

module.exports = async (req, res) => {
  console.log(req.params.id);
  try {
    const cate = await Category.findByIdAndDelete(req.params.id);
    if(cate == null) {
      return res.sendStatus(404);
    }
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e);
  }
};
