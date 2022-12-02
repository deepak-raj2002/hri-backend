const express = require('express')
const {httpCreateShop} = require('./shops.controller')

const ShopsRouter = express.Router()

ShopsRouter.post('/createshop', httpCreateShop)

module.exports = ShopsRouter