const { isValidObjectId } = require("mongoose");

module.exports = (req, res, next) => {
  return isValidObjectId(req.params.id)
    ? next()
    : res.status(400).send({ error: "Not a valid id." });
};
