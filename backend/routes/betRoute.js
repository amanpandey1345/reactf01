const express = require("express");
// const isAuthenticatedUser = require("../middleware/auth");
const {createBet, myBet, getAllBets, getAllBetDone} = require("../controllers/betController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/user/bet").post( isAuthenticatedUser,createBet);
router.route("/mybet").get( isAuthenticatedUser,myBet);
router.route("/admin/bets").get(isAuthenticatedUser, authorizeRoles("admin"), getAllBets);
router.route("/admin/bet/done").put(isAuthenticatedUser, authorizeRoles("admin"), getAllBetDone);




module.exports = router;