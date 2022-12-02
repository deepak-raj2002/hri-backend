const express = require('express')

const httpCreateSubdomainString = require('./subdomain.controller')

const subdomainRouter = express.Router()

subdomainRouter.post('/', httpCreateSubdomainString)

module.exports = subdomainRouter