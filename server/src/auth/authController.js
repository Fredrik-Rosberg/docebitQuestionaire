const encrypt = require("../../config/encryption");
const db = require("../../db");
const { getUserByEmail } = require("../users/usersController");

//sign in
const signInUser = async (req, res) => {
  const encryptedPassword = encrypt(req.body.password);
  let userExists;
  try {
    userExists = await getUserByEmail(req.body.email);
    
    if (userExists) {
      try {
        let user = await db.query(
          "SELECT * FROM users WHERE email =$1 AND hashedpassword=$2",
          [req.body.email, encryptedPassword]
        );

        user = user.rows[0];
        delete user.password;
        req.session.user = user;
        req.session.user.loggedIn = true;
        res.status(200).json({ loggedIn: true, message: "Congrats you are logged in" });
      } catch (err) {
        res.status(401).json({ loggedIn: false, message: "Wrong password" });
      }
      
     
    } else {
      res.status(401).json({ loggedIn: false, message: "No matching user" });
    }
  } catch (err) {
    console.log(err);
  }
};

//sign out
const signOutUser = async (req, res) => {
  req.session.destroy(() => {
   res.json({ loggedIn: false });
  
  });
};

//get signed in user

const getSignedInUser = async (req, res) => {
  try {
    let user;
    // console.log("user" + " " + JSON.stringify(req.session.user));
    // console.log("id" + " " + req.session.id);
    console.log(req.session);
    if (req.session.user) {
      user = await db.query("SELECT * FROM users WHERE email=$1", [
        req.session.user.email,
      ]);
    }
    if (user) {
      user.loggedIn = true;
      res.json(user.rows);
    }
  } catch (error) {
    res.status(401);
    res.json({ loggedIn: false, message: "Not logged in" });
  }
};

module.exports = { signInUser, signOutUser, getSignedInUser };
