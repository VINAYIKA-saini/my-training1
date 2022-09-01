const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(200).send({ msg: savedData });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};

const createLogin = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.findOne(data);
    let token = jwt.sign({ userId: savedData._id.toString(), vinayika: "saini", birth: "sept" }, "vinayikasaini@62644$1509");
    res.status(200).send({ msg: token });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};

const getUser = async function (req, res) {
  try {
    let data = req.params.userId;
    let savedData = await userModel.findOne({ _id: data });

    res.status(201).send({ msg: savedData });
  }

  catch (err) {
    res.status(500).send({ error: err.message })
  }
};



const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) { return res.status(404).send("No such user exists"); }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: true, data: updatedUser });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }

};


const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let deleteUser = await userModel.findByIdAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    return res.status(200).send({ msg: deleteUser })
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
}









module.exports.createUser = createUser
module.exports.createLogin = createLogin
module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
