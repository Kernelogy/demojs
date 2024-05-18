const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(9999, "0.0.0.0", ()=>{
    console.log("Server Connected....")
})