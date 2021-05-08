const { User } = require("../../model/User");

module.exports = async (req, res) => {
  const { username, password } = req.body;
  try {
    const takenUser = await User.findOne({ username });
    if (takenUser == null) {
      const user = new User({ username, password });
      const result = await user.save();
      return res.status(200).send(result);
    }
    res.status(400).send({error: 'Username already taken.'});
  } catch (e) {
    res.status(500).send(e);
  }
};
