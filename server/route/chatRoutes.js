const {
  allChat,
  chatById,
  postChat,
  reformedChatData,
  groupedChatData,
} = require('../controllers/chatController');

const router = require('express').Router();
router.get('/groupedbydate', reformedChatData)
router.get('/grouped',groupedChatData)
router.get('/:id', chatById);
router.post('/', postChat);
router.get('/', allChat);


module.exports = router;
