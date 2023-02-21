const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {getAllSay, createSay} = require("../controllers/sayController");


const router = express.Router();


router.route("/user/say").post( isAuthenticatedUser,createSay);

router.route("/admin/says").get(isAuthenticatedUser, authorizeRoles("admin"), getAllSay);





module.exports = router;