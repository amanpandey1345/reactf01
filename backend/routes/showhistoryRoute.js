const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {createShowhistory, getShowhistory} = require("../controllers/showhistoryController");


const router = express.Router();

router.route("/admin/showhistory").post(isAuthenticatedUser, authorizeRoles("admin"), createShowhistory);
router.route("/user/showhistory").get( isAuthenticatedUser,getShowhistory);




module.exports = router;
