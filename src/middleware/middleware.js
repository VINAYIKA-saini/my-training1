const jwt = require("jsonwebtoken");
const authenticate =function (req,res,next){
    let token = req.headers["token-x-auth"]
    if(!token) return res.send ({msg:"request not containing a mendatory header"});
    let Decode = jwt.verify(token,"vinayikasaini@62644$1509")
    //req.decodedToken = Decode
    next()
}

//const authorization= async function(req,res,next){
    //userid=req.params.userId
    //authorized_id=req.decodedToken["userId"]
    //if(userid==authorized_id){
    //  next()
    //}else{
      //return res.status(200).send({status:false,msg:"Un-authorized_id"})
   // }
//}

module.exports.authenticate=authenticate
//module.exports.authorization=authorization

