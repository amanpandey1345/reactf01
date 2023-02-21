const express = require("express");
const { createAddStudent, getAllAddStudent, getStudent, deletStudent, updateStudent } = require("../controllers/addstudentController");




const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/student/create").post( isAuthenticatedUser, authorizeRoles("admin","head"),createAddStudent); 
router.route("/student/:id").get( isAuthenticatedUser, authorizeRoles("admin","head"),getAllAddStudent);
router.route("/student/fee/:id").get( isAuthenticatedUser, authorizeRoles("admin","head"),getStudent);
// router.route("/class").get( isAuthenticatedUser,myBet);
// router.route("/class/update").get(isAuthenticatedUser, authorizeRoles("admin"), getAllBets);
router.route("/student/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin","head"), deletStudent);
router.route("/student/update/:id").put(isAuthenticatedUser, authorizeRoles("admin","head"), updateStudent);




module.exports = router;