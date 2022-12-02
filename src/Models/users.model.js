const User = require('./users.schema')

async function getUser (userId) {
    const userData = await User.findOne({userId: userId})
    if (userData.length !== 0){
        return userData
    }else{
        return "User Not Existed"
    }
}

// const jwtToken = jwt.sign(payload, secrtKey)

async function createUser (userData){
    const userObject = {
        userId: userData.userId,
        shopId: userData.shopId,
        subdomain: userData.subdomain,
        userName: userData.userName,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
        profilePicture: userData.profilePicture,
        }
    try{
        const user = await User.updateOne({
            userId: userObject.userId
        }, userObject, {upsert: true})
        return user
    }catch(e){
        console.log(e)
    }
    
}

async function updateUser (updatedUser){
    await User.updateOne({userId: updatedUser.userId}, updatedUser, {upsert: true})
}

module.exports = {getUser, createUser, updateUser}