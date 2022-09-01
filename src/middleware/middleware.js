const jwt = require("jsonwebtoken");
const authenticate = function (req, res, next) {
    try {
        let token = req.headers["token-x-auth"]
        if (!token) return res.status(404).send({ msg: "request not containing a mendatory header" });
        let Decode = jwt.verify(token, "vinayikasaini@62644$1509")
        if (!Decode) return res.status(401).send({ msg: "Invalid Token" });
        req.decodedToken = Decode
        next()
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}

const authorization = async function (req, res, next) {
    try {
        userid = req.params.userId
        authorized_id = req.decodedToken["userId"]
        if (userid == authorized_id) {
            next()
        } else {
            return res.status(403).send({ status: false, msg: "Un-authorized_id" })
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}

module.exports.authenticate = authenticate
module.exports.authorization = authorization

