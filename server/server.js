const express = require("express");
const PORT = "3001";
const app = express();
const cors = require("cors");
const pool = require("./db");
const encrypt = require("./config/encryption");
app.get("/", (req, res) => {
  res.send("<h1>Hejsan va kul<h1>");
});

app.use(cors());
app.use(express.json());

//Routes
//create a user
app.post("/user", async (req, res) => {
  try {
    // console.log(req.body)
    let encryptedpassword = encrypt(req.body.password);
    const email = req.body.email;

    console.log(email, encryptedpassword);
    const newUser = await pool.query(
      "INSERT INTO users (email, password) VALUES($1, $2)",
      [email, encryptedpassword]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/getuser", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Listen on port:${PORT}`);
});
