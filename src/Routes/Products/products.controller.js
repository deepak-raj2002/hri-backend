const {Createproduct}=require("../../Models/products.model")
const productcreation=async(req,res)=>{
    try{
    const productData=req.body;
    await Createproduct(productData);
    return res.status(200).json({"response":"Product Created Successfully"})
    }catch(err)
    {
      return res.status(500).json({"response":"Product Creation Not Succesful"})
    }
};

module.exports={productcreation};