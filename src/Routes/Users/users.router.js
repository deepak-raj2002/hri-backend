const express = require('express')
const {httpGetUser, httpCreateUser, httpUpdateUser} = require('./users.controller')

const UsersRoute = express.Router()

UsersRoute.post('/getuser', httpGetUser)

UsersRoute.post('/createuser', httpCreateUser)

UsersRoute.post('/updateuser', httpUpdateUser)

module.exports = UsersRoute