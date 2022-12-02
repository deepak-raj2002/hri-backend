const {CreateShop} = require('../../Models/shops.model')

async function httpCreateShop(req, res){
    const shopData = req.body
    await CreateShop(shopData)
    res.status(200).json({"response": "shop Created  Successfully"})
}


module.exports = {httpCreateShop}