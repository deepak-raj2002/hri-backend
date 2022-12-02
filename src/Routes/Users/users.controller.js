const {getUser, createUser, updateUser} = require('../../Models/users.model')

async function httpGetUser (req, res){
    const {userId} = req.body
    const response = await getUser(userId)
    return res.status(200).json({"response": response})
} 

async function httpCreateUser (req, res){
    const userData = req.body
    await createUser(userData)
    return res.status(201).json({'response': 'user crested Successfully'})
}

async function httpUpdateUser (req, res){
    const updatedUser = req.body
    await updateUser(updatedUser)
    res.status(200).json({"response": "Updated Successfully"})
}

module.exports = {httpGetUser, httpCreateUser, httpUpdateUser}