const express = require('express');
const {productcreation}=require("./products.controller");

const ProductsRouter = express.Router()

ProductsRouter.post('/createproducts', productcreation)

module.exports =ProductsRouter;