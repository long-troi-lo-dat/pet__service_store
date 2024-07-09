const jwt = require("jsonwebtoken")
const { verifyToken, generateAccessToken, generateRefreshToken } = require("../utils/jwt")

let refreshTokens = [];

const middlewareToken = {
    verify: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next()
            })
        } else {
            return res.status(401).json("You are not authenticated");
        }
    },
    verifyAndAdminAuth: (req, res, next) => {
        middlewareToken.verify(req, res, () => {
            if (req.user.id_user == req.params.id_user || req.user.vaitro == "Admin") {
                next()
            } else {
                return res.status(403).json("You are not allowed to do this action")
            }
        })
    },
    refreshToken: (req, res) => {
        const { refreshToken } = req.body;
        if (!refreshToken) return res.status(401).json("You are not authenticated");
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("RefreshToken is not valid");
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json("Refresh token is not valid");
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            const newAccessToken = generateAccessToken(user);
            const newRefreshToken = generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
        });
    }
}

module.exports = middlewareToken;