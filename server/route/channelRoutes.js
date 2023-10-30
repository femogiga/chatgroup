const { allChannels, channelById, createChannel } = require('../controllers/channelController');

const router = require('express').Router();

router.get('/:id',channelById )
router.get('/', allChannels)
router.post('/', createChannel)


module.exports =router
