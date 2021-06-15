const User = require ('../models/user')

exports.createUser = async (req,res) => {
    const {name, email, age} = req.body
     if(!email || !name) {
       return res.status(422).json({
            message: 'please fill name or email fields'
        })
     }

     const user = new User ({
         name,
         email,
         age
     })
    
        try {
            const response = await user.save()
            res.status(201).json({
                message: 'Saved new User',
                data: response
            })
            
        }catch(error){
            res.status(500).json({
                message:error.message
            })
        }
        

}

//===================================================
exports.getUser = async (req, res) => {
    try{
        const response = await User.find()
        
        res.status(200).json({
            data: response
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

//===================================================
exports.updateUser = async (req, res) =>{
    try{
        const user = await User.findById(req.params.id)
        User.name = req.body.name
        User.age = req.body.age

        const response = await user.save(req.params.id)
        res.status(201).json({
            message: 'User has been updated',
            data: response
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

//===================================================
exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const response = await User.findOneAndDelete({
            _id:id
        })

        res.status(201).json({
            message: 'deleted User',
            data: response
        })
    }catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}