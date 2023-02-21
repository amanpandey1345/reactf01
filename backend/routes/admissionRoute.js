const express = require("express");
const { createAdmission, getAllAdmission, deletAdmission } = require("../controllers/admissionController");


const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/Admission/create").post( isAuthenticatedUser, authorizeRoles("admin","head"),createAdmission);
router.route("/Admission").get( isAuthenticatedUser, authorizeRoles("admin","head"),getAllAdmission);
// router.route("/class").get( isAuthenticatedUser,myBet);
// router.route("/class/update").get(isAuthenticatedUser, authorizeRoles("admin"), getAllBets);
router.route("/Admission/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin","head"), deletAdmission);




module.exports = router;