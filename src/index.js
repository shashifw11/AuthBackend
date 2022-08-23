const express = require("express"); 
const cors = require("cors");
const userController = require("./controllers/user.controller")
 const { register , login , newToken} = require("./controllers/auth.controller")

const app = express() ; 

app.use(express.json()) ; 

app.use(cors());


app.post("/register" , register) ; 
app.post("/login" , login) ;
app.use("/users" , userController) ; 

module.exports = app; 

