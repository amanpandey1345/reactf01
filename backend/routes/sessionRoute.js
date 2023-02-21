const express = require("express");

const { createSession, getAllSession, deletSession, updateSession } = require("../controllers/sessionController");


const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/Session/create").post( isAuthenticatedUser, authorizeRoles("admin","head"),createSession);
router.route("/Session").get( isAuthenticatedUser, authorizeRoles("admin","head"),getAllSession);
// router.route("/class").get( isAuthenticatedUser,myBet);
router.route("/session/update/:id").put(isAuthenticatedUser, authorizeRoles("admin","head"), updateSession);
router.route("/session/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin","head"), deletSession);




module.exports = router;