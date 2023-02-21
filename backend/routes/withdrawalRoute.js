const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {createWithdrawal, myWithdrawal, getAllWithdrawals, UpdateUsersWithdrawal} = require("../controllers/withdrawalController");


const router = express.Router();


router.route("/user/withdrawal").post( isAuthenticatedUser,createWithdrawal);
router.route("/mywithdrawal").get( isAuthenticatedUser,myWithdrawal);
router.route("/admin/withdrawals").get(isAuthenticatedUser, authorizeRoles("admin"), getAllWithdrawals);
router.route("/admin/withdrawals/update/:id").put(isAuthenticatedUser, authorizeRoles("admin"), UpdateUsersWithdrawal);





module.exports = router;