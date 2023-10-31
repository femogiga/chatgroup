const {
  addUserToChannel,
  getUsersInChannel,
} = require('../controllers/userOnChannelController');

const router = require('express').Router();

router.post('/', addUserToChannel);
router.get('/', getUsersInChannel);

module.exports = router;
