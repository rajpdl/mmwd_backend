const { User } = require("./../../model/User");

module.exports = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user == null) {
      return res.sendStatus(404);
    }
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e);
  }
};
