const app = require("./index") ; 

const connect = require("./configs/db") ; 
 const PORT = 2345 ; 
  app.listen(process.env.PORT || PORT , async()=>{
    try{
        await connect() ; 
        console.log("listning port 2345");
    }catch(err){
        console.log(err.message);
    }
  }
)

