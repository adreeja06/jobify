import User from '../models/User.js'


const register =async(req, res) => {
try{ const user = await User.create(req.body)
} catch{
    
}

}

const login =async(req, res) => {
res.send('login user')
}
const updateUser =async(req, res) => {
res.send('updateUser')
}

export{register, login, updateUser}
