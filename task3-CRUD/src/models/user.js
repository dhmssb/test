const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        unique: true

    },

    age : {
        type: Number
    }

})

module.exports = mongoose.model('User', UserSchema)