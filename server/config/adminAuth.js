function authAdmin(req, res, next) {
  let user = req.session.user;
    console.log(user)
  if (user.role == "user") {
    res.status(403);
    return res.send("you need to be admin to se all users");
  } 
  next()
}
module.exports = { authAdmin };
