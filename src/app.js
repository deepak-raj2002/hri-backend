const express = require('express')
const cors = require('cors')
const subdomainRoute = require('./Routes/subdomain/subdomain.router')
const UsersRoute = require('./Routes/Users/users.router')
const ShopsRouter = require('./Routes/Shops/shops.router')
const ProductsRouter = require('./Routes/Products/products.router')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/subdomain', subdomainRoute)
app.use('/user', UsersRoute)
app.use('/shop', ShopsRouter)
app.use('/products',ProductsRouter)

module.exports = app