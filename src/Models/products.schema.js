const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    UId:{
        type:"string",
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productImages:{
        type:Array,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDescription:{
        type:String,
        required:true,
        maxlength:2000,
    },
    productdiscountPrice:{
        type:Number,
    },
    productCategory:{
        type:String,
        required:true
    },
    productUnits:{
        type:Number,
        required:true
    },
    productHSN:{
        type:"string",
        required:true
    },
    productUnitType:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Products",ProductSchema);