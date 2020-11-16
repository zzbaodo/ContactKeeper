const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //Get token from the header
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No authorization" });
  }
  try {
    const decoded = jwt.verify(token, config.get("secret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
    console.error(error.message);
  }
};
