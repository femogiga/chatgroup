const { addUserToChannel } = require('../controllers/userOnChannelController')

const router = require('express').Router()


router.post('/',addUserToChannel)



module.exports =router
