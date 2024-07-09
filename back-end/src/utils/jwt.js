const jwt = require("jsonwebtoken");

const generateAccessToken = (payload, secret, expiresIn) => {
    return jwt.sign(payload, secret, { expiresIn })
};
const generateRefreshToken = (payload, secret, expiresIn) => {
    return jwt.sign(payload, secret, { expiresIn })
};

const verifyToken = (token, secret) => {
    return jwt.verify(token, secret)
};

module.exports = { generateAccessToken, generateRefreshToken, verifyToken }