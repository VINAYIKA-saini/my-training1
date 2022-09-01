const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const middleware = require("../middleware/middleware.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.createLogin)

//The userId is sent by front end
router.get("/users/:userId", middleware.authenticate, middleware.authorization, userController.getUser)

router.put("/users/:userId", middleware.authenticate, userController.updateUser)

router.delete("/users/:userId", middleware.authenticate, userController.deleteUser)



module.exports = router;





