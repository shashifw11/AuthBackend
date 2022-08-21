const express = require("express"); 
const userController = require("./controllers/user.controller")
 const { register , login } = require("./controllers/auth.controller")

const app = express() ; 

app.use(express.json()) ; 

app.post("/register" , register) ; 
app.post("/login" , login) ;
app.get("/user" , userController) ; 

module.exports = app; 

