const jwt = require("jsonwebtoken");
const token = {};

token.generateToken = (data) => {
    console.log(data);
    var token = jwt.sign(data, "fishoff-Dibin_Anna-project");
    return token;
}

module.exports = token;