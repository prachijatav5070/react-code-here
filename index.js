const express=require("express");
const app=express()
const mongoose=require("mongoose");
const StuRoute=require("./routes/studentRoute");
mongoose.connect("mongodb://127.0.0.1:27017/prachidb")
const bodyparser = require("body-parser")
//body=parser middleware
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use("/students",StuRoute);

app.get("/",(req,res)=>{
    res.send("hello i am working");
})


app.listen(8000,()=>{
    console.log("sarver run on 8000 !!")
})
