const express = require("express")
const app = express()

app.get("/api/products",async(req,res)=>{
    return res.json("this is the products")
})

app.listen(3000,()=>{
    console.log("server started running")
})