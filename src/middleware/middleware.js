const jwt = require("jsonwebtoken");
const authenticate =function (req,res,next){
    let token = req.headers["token-x-auth"]
    if(!token) return res.send ({msg:"request not containing a mendatory header"});
    let Decode = jwt.verify(token,"vinayikasaini@62644$1509")
    req.decodedToken = Decode
    next()
}



module.exports.authenticate=authenticate
