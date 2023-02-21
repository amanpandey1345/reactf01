const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {createDeposit, myDeposit, getAlldeposits, UpdateUsersDeposit} = require("../controllers/depositController");


const router = express.Router();


router.route("/user/deposit").post( isAuthenticatedUser,createDeposit);
router.route("/mydeposit").get( isAuthenticatedUser,myDeposit);
router.route("/admin/deposits").get(isAuthenticatedUser, authorizeRoles("admin"), getAlldeposits);
router.route("/admin/deposits/update/:id").put(isAuthenticatedUser, authorizeRoles("admin"), UpdateUsersDeposit);




module.exports = router;