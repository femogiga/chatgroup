const {
  allChat,
  chatById,
  postChat,
  allChatGroupByDate,
} = require('../controllers/chatController');

const router = require('express').Router();
router.get('/groupedbydate',allChatGroupByDate)
router.get('/:id', chatById);
router.post('/', postChat);
router.get('/', allChat);


module.exports = router;
