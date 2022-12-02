const Products=require("./products.schema");
const Createproduct=async(productData)=>{
    const response=await Products.updateOne({UId:productData.UId,productName:productData.productName},productData,{upsert:true})
    console.log(response);
}

module.exports={Createproduct};