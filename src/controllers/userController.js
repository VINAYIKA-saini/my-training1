const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
   res.send({ msg: savedData });
};

const createLogin = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.findOne(data);
  let token =jwt.sign({userId:savedData._id.toString(),vinayika: "saini", birth: "sept" },"vinayikasaini@62644$1509");
   res.send({ msg: token });
};

const getUser = async function (req, res) {
  let data = req.params.userId;
  let savedData = await userModel.findOne({_id:data,isDeleted:false});
  
   res.send({ msg: savedData});
};



//const updateUser = async function (req, res) {
  //let data = req.params.userId;
  //let savedData = await userModel.findOneAndUpdate({_id:data});
  
  
   //res.send({ msg: savedData});
//}

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) { return res.send("No such user exists"); }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },userData,{new:true});
  res.send({ status: true, data: updatedUser });

};

 
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let deleteUser = await userModel.findByIdAndUpdate({ _id: userId },{ isDeleted: true },{ new: true })
  return res.send({ msg: deleteUser })
}









module.exports.createUser=createUser
module.exports.createLogin=createLogin
module.exports.getUser=getUser
module.exports.updateUser=updateUser
module.exports.deleteUser = deleteUser
