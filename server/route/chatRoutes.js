const {
  allChat,
  chatById,
  postChat,
} = require('../controllers/chatController');

const router = require('express').Router();
router.get('/:id', chatById);
router.post('/', postChat);
router.get('/', allChat);

module.exports = router;
