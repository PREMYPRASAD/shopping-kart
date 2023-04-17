const express = require("express");
const router = express.Router();
const {

  
  addUser,
getUserDetails
} = require("../controllers/user");



// POST
router.post("/enter", addUser);
router.get("/get", getUserDetails);
module.exports = router;