const { db } = require("../config/config");
const getUserDetails = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.send(result);
    console.log(result)
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
};
const addUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);
  try {
  
    const result = await db.query(
      'SELECT * FROM users WHERE user_name = ${username} AND user_password = ${password}',{username,password}    
    );
    console.log(result);
    if (result.length > 0) {
      res.send({ status: true, message: "success", data:result});
    } else {
      res.send({ message: "Wrong username or password" });
    }
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
};




module.exports = {
  //getCartItems,
  addUser,
  getUserDetails
}