const { allUsers, findById, createUser } = require('../controllers/userController');

const router = require('express').Router();

router.get('/:id', findById);
router.get('/', allUsers);
router.post('/' ,createUser)

module.exports = router;
