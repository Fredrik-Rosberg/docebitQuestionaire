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
  try {
    let encryptedPassword = encrypt(req.body.password);
    let sqlQuery = "INSERT INTO users (email, password) VALUES ($1,$2)";
    result = await db.query(sqlQuery, [req.body.email, encryptedPassword]);
  } catch (error) {
    console.error(error);
  }

  res.json(result);
};

//delete user
const deleteUser = async(req, res)=>{
    let result;
    let sqlQuery="DELETE FROM users WHERE id=$1"
    result=await db.query(sqlQuery,[req.params.id])
    console.log(result)
    res.json(result)

}

module.exports = { getAllUsers, getUserById, createUser, deleteUser };
