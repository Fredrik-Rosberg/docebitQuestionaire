const express = require("express");
const PORT = "3001";
const app = express();
const cors = require("cors");
const oneDay = 1000 * 60 * 60 * 24;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const authRoute = require("./src/auth/authRouter");
const userRoute = require("./src/users/usersRouter");

//Create session storage

let session = require("express-session");

app.use(
  session({
    secret: "keyboard cat jksfj<khsdka",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: oneDay, // Gör att användaren är inloggad i en dag fastän man stänger ner browsern, antingen den här eller expire
      secure: false, // set to true with https
      httpOnly: true,
      expires: 60000, //Vid en inaktiv minut så loggas man ut
    },
  })
);
app.get("/test", (req, res) => {
  res.send("You're connected to backend");
});
app.use("/", userRoute);
app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`Listen on port:${PORT}`);
});
