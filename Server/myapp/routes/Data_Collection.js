const express = require("express")
const dataModel = require('../models/Data_Collection')
const dataRouter = express.Router();

dataRouter.post("/",async(req,res)=>{
 
    console.log(req.body)
const dataInstance = new dataModel({
    StoreID : req.body.StoreID,
    StoreName : req.body.StoreName,
    StoreDescription : req.body.StoreDescription,
    StoreLogo : req.body. StoreLogo
})
const data = await dataInstance.save()
try{
    console.log("instance save" , data)
      res.json(data)

}
catch(err){
    console.log(err)
}

}).get("/" , async(req,res)=>{
    
        const user = await dataModel.find({});
          
             try{
              res.json(user)
             }
             catch(err){
               console.log(err);
             }
                  
}) .delete("/:id", async (req, res) => {
    const result = await dataModel.findByIdAndRemove({ _id: req.params.id })
    try {
        res.json(result);

    }
    catch (err) {
        console.log(err);
    }
}).patch("/:id",async (req, res) => {

    const { id } = req.params;
    const data = {...req.body}
    const updatedData = {
        ...(data.StoreID ? { StoreID : data.StoreID  } : {}),
        ...(data.StoreName ? { StoreName: data.StoreName } : {}),
        ...(data.StoreDescription ? { StoreDescription: data.StoreDescription } : {}),
        ...(data.StoreLogo ? { StoreLogo: data.StoreLogo } : {}),
        
    }
    try {
        const dataA = await dataModel.findOneAndUpdate({ _id: id }, updatedData)
        res.json(dataA)

    } catch (error) {
        return console.log(error);
    }
})


module.exports= dataRouter;