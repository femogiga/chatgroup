const {
  addUserToChannel,
  getUsersInChannel,
} = require('../controllers/userOnChannelController');

const router = require('express').Router();

router.post('/', addUserToChannel);
router.get('/:id', getUsersInChannel);

module.exports = router;
