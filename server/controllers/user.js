const { db } = require("../config/config");
// 
const getUserDetails =  (req, res) => {
  try {
    if (req.session.user) {
        res.send({LoggedIn: true, user: req.session.user})
    } else {
        res.send({LoggedIn: false})
    }
} catch (err) {
    console.log(err)
}
}

const getUserLogout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
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
//     if (result.length > 0) {
//       res.send({ status: true, message: "success", data:result});
//     } else {
//       res.send({ message: "Wrong username or password" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// };
    if (result.length>0) {
        req.session.user = result[0];
        console.log(req.session.user);
        res.send(result[0]);
        // res.redirect('/home')
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
      
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  };




module.exports = {
  //getCartItems,
  addUser,
  getUserDetails,
  getUserLogout
}