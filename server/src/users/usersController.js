const db = require("../../db");
const encrypt = require("../../config/encryption");

//get all users
const getAllUsers = async (req, res) => {
  let sqlQuery = "SELECT id, email, role FROM users";
  let result = await db.query(sqlQuery);
  res.json(result.rows);
};


//get user by id
const getUserById = async (req, res) => {
  let sqlQuery = "SELECT id, email FROM users WHERE id=$1";
  let result = await db.query(sqlQuery, [req.params.id]);
  res.json(result.rows);
};

//create user
const createUser = async (req, res) => {
  let result;
  console.log(req.body.email)
  try {
    let encryptedPassword = encrypt(req.body.password);
    console.log(encryptedPassword);
    let sqlQuery =
      "INSERT INTO users (email, hashedpassword, role) VALUES ($1,$2,$3)";
    result = await db.query(sqlQuery, [
      req.body.email,
      encryptedPassword,
      req.body.role,
    ]);
  } catch (error) {
    res.send(error);
  }

  res.json(result);
};

//delete user
const deleteUser = async (req, res) => {
  let result;
  let sqlQuery = "DELETE FROM users WHERE id=$1";
  result = await db.query(sqlQuery, [req.params.id]);
  console.log(result);
  res.json(result);
};

const getUserByEmail = async (email) => {
  try {
    let sqlQuery = "SELECT id, email FROM users WHERE email=$1";
    const user = await db.query(sqlQuery, [email]);
    if(user.rows[0]){
      return user
    }
    else{
      return null
    }


    
  } catch (error) {
    
    return error;
  }



};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  getUserByEmail
};
