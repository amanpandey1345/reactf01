const express = require("express");

const { createClass, getAllClasses, updateClass, getClass, deletClass } = require("../controllers/classController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/class/create").post( isAuthenticatedUser, authorizeRoles("admin","head"),createClass);
router.route("/class/:Syear").get( isAuthenticatedUser, authorizeRoles("admin","head"),getAllClasses);

router.route("/class/update/:id").put(isAuthenticatedUser, authorizeRoles("admin","head"), updateClass);
router.route("/class/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin","head"), deletClass);
router.route("/class/:id").get(isAuthenticatedUser, authorizeRoles("admin","head"), getClass);





module.exports = router;