/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: "can't touch this!" });
      } else {
        req.user = { role: decodedToken.role };

        next();
      }
    });
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
};
