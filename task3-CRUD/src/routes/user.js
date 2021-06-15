const router = require('express').Router()

const ctrlUsr = require ('../controllers/user')





router.route('/')
    .post(ctrlUsr.createUser)
    .get(ctrlUsr.getUser)
    .put(ctrlUsr.updateUser)
    .delete(ctrlUsr.deleteUser)


 
module.exports = router