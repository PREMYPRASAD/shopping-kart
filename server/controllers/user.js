const { db } = require("../config/config");

const addUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  try {
    const result = await db.query(
      ` INSERT INTO User (username,password) VALUES ($1, $2)`,
      [username,password]
    );
    console.log(result);
res.send(result)
    //res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
const checkUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
      
    const result = await db.query(
      ` SELECT * FROM User WHERE username=$1 AND password=$2`,
      [username,password]
    );
    console.log(result);

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


module.exports = {
    //getCartItems,
    addUser,
    checkUser,
}