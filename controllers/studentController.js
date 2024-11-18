
const StuModel=require("../models/studentModel");
const dataSave=async(req,res)=>{
    const{rollno,name,city,fees}=req.body;
    const Data=await StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    

res.send("data is save in frontend");
}
module.exports={dataSave};