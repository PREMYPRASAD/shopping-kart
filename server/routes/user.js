const express = require("express");
const router = express.Router();
const {

  
  addUser,
  getUserDetails,
getUserLogout
} = require("../controllers/user");



// POST
router.post("/enter", addUser);
router.get("/get", getUserDetails);
router.post("/", getUserLogout);
module.exports = router;