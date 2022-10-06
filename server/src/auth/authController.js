const encrypt = require("../../config/encryption");
const db = require("../../db");

//sign in
const signInUser = async (req, res) => {
  const encryptedPassword = encrypt(req.body.password);
  let user = await db.query(
    "SELECT * FROM users WHERE email =$1 AND password=$2",
    [req.body.email, encryptedPassword]
  );
  user = user.rows[0];
  if (user && user.email) {
    delete user.password;
    req.session.user = user;
    req.session.user.loggedIn = true;
    res.json({ loggedIn: true });
  } else {
    res.status(401);
    res.json({ loggedIn: false, message: "No matching user" });
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
  let user;
  console.log("hh");
  console.log(req.session.user);
  if (req.session.user) {
    user = await db.query("SELECT * FROM users WHERE email=$1", [
      req.session.user.email,
    ]);

    console.log(user);
  }

  if (user) {
    user.loggedIn = true;
    res.json(user.rows);
  } else {
    res.status(401);
    res.json({ loggedIn: false, message: "Not logged in" });
  }
};

module.exports = { signInUser, signOutUser, getSignedInUser };