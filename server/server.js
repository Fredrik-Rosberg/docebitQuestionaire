const express= require("express")
const PORT='3001'
const app=express()
app.get("/",(req, res)=>{res.send("<p>Hejsan va kul</p>")})


app.listen(PORT, ()=>{console.log( `Listen on port:${PORT}`)})