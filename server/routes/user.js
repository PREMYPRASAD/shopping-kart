const express = require("express");
const router = express.Router();
const {

  //getCartItems,
  addUser,
  //deleteItem,
 // increaseItemQuantity,
  //decreaseItemQuantity,
} = require("../controllers/user");



// POST
router.post("/register", addUser);

module.exports = router;