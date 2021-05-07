const { User } = require("../../model/User")

module.exports = async (req, res) => {
 try {
     const users = await User.find({});
     res.status(200).send(users);
 } catch (e) {
     res.status(500).send(e);
 }   
}