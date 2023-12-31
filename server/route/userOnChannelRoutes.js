const {
  addUserToChannel,
  getUsersInChannel,
  findOrAddUserOnChannel,
} = require('../controllers/userOnChannelController');

const router = require('express').Router();

router.post('/', findOrAddUserOnChannel);
// router.post('/', addUserToChannel);
router.get('/:id', getUsersInChannel);

module.exports = router;
