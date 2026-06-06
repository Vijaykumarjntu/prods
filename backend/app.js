const express = require("express")
const app = express()
const cors = require('cors')


app.use(express.json())
app.use(cors())
const products = [
  {
    "id": "P001",
    "name": "Laptop",
    "category": "Electronics",
    "price": 999.99,
    "description": "A high-performance laptop for work and gaming."
  },
  {
    "id": "P002",
    "name": "Smartphone",
    "category": "Electronics",
    "price": 499.99,
    "description": "A budget-friendly smartphone with great features."
  },
  {
    "id": "P003",
    "name": "buggati veyron",
    "category": "Electronics",
    "price": 49999999.99,
    "description": "A budget-friendly super car,so it will be status symbol,we are aiming to own it we will be owning it oneday"
  }
]

app.get("/api/products",async(req,res)=>{
    return res.json(products)
})

app.listen(5000,()=>{
    console.log("server started running")
})