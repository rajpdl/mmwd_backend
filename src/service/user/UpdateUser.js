const { User } = require("./../../model/User");

module.exports = async (req, res) => {
  const { password } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.sendStatus(404);
    }
    if (!password) {
      return res.status(400).send({ error: "Password is required." });
    }
    if (user.password != password) {
      console.log(user);
      user.password = password;
      user.editedAt = Date.now();
      const result = await user.save();
      return res.status(200).send(result);
    } else {
      res.status(200).send(user);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};
