const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authentication = async (req, res, next) => {
  const user_token = req.headers.authorization.split(" ")[1];
  if (!user_token) {
    return res.status(511).send("you are not authenticated try logging in again");
  }
  await jwt.verify(
    user_token,
    process.env.TOKEN_KEY,
    function (err, decoded) {
      if (err) {
        return res.status(511).send("you are not authenticated try logging in again");
      }
      req.body.userId = decoded.userId;
      next();
    }
  );
};

module.exports = Authentication;
