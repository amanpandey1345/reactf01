const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {createShowtime, getShowtime, UpdateShowtime} = require("../controllers/showtimeController");


const router = express.Router();

router.route("/admin/showtime").post(isAuthenticatedUser, authorizeRoles("admin"), createShowtime);
router.route("/admin/getshowtime").get(isAuthenticatedUser, getShowtime);
router.route("/admin/showtime/update").put(isAuthenticatedUser, authorizeRoles("admin"), UpdateShowtime);



module.exports = router;
