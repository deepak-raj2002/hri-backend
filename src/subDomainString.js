const list = [{id: 1, subdomain: 'prasad123', user: 'Prasad'}, {id: 2, subdomain: 'hri123', user: 'jithendra'}]


function createSubdomainSting(shopName){
    const randumNumber = Math.round(Math.random() * 1000)
    return `${shopName}${randumNumber}`
}

async function getSubDomains (){
    try{
        const subDomainsList = list.map(each => {
            return each['subdomain']
        })
        return subDomainsList
    } catch(e){
        getSubDomains()
    }
    
}

async function getSubdomainString(shopName) {
    const subDomains = await getSubDomains()
    const subdomainString = createSubdomainSting(shopName)
    if(subDomains.includes(subdomainString)){
        console.log(subDomains)
        getSubdomainString(shopName)
    }else{
        return subdomainString
    }
}

 module.exports = getSubdomainString