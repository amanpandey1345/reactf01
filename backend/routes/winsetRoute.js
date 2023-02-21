const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {createWinset, getWinset, UpdateWinset} = require("../controllers/winsetController");


const router = express.Router();

router.route("/admin/winset").post(isAuthenticatedUser, authorizeRoles("admin"), createWinset);
router.route("/admin/getwinset").get(isAuthenticatedUser, authorizeRoles("admin"), getWinset);
router.route("/admin/winset/update").put(isAuthenticatedUser, authorizeRoles("admin"), UpdateWinset);



module.exports = router;
