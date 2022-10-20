const postgresql= require('pg')


const UserSchema = new postgresql.Schema({
  email: String,
  password: String,
});

module.exports = postgresql.model("user", UserSchema);