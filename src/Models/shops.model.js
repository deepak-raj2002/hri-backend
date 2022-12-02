const Shop = require('./shops.schema')

async function CreateShop(shopData){
    const response = await Shop.updateOne({shopId: shopData.shopId}, shopData, {upsert: true})
    console.log(response)
}

module.exports = {CreateShop} 