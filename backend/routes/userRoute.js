const express = require("express");

const {
  getAllUser,
  updateUser,
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateBalance,
  pop_natifications,
  AdminUpdateProfile,
  loginUserReq,
  deletUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
// const isAuthenticatedUser = require("../middleware/auth");
// const multer = require("../middleware/multer");

const router = express.Router();

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin","head"), getAllUser);
router.route("/admin/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin","head"), deletUser);
router.route("/register").post( isAuthenticatedUser, authorizeRoles("admin","head"), registerUser);
router.route("/user/update/:id").put(isAuthenticatedUser, authorizeRoles("admin","head"), updateUser);
router.route("/login").post(loginUserReq);
router.route("/login/token").post(loginUser);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/balance/update").put(isAuthenticatedUser, updateBalance);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/forgot/token").put(resetPassword);
router.route("/logout").get(isAuthenticatedUser, logoutUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/me/notifi").put(isAuthenticatedUser, pop_natifications);
router.route("/admin/user/update/:id").put(isAuthenticatedUser,authorizeRoles("admin"),AdminUpdateProfile);

module.exports = router;
