const express = require("express");
const PORT = "3001";
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Routes
const userRoute=require("./src/users/usersRouter")
const authRoute=require("./src/auth/authRouter")

//Create session storage
let session = require("express-session");

app.use(
  session({
    secret: "keyboard cat jksfj<khsdka",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // set to true with https
      httpOnly: true,
    },
  })
);

app.use("/", userRoute);
app.use("/", authRoute);




app.listen(PORT, () => {
  console.log(`Listen on port:${PORT}`);
});
