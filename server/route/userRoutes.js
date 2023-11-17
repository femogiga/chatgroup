// const {
//   allUsers,
//   findById,
//   createUser,
// } = require('../controllers/userController');
const { allUsers, findById,getUserAndUsersGroup, updateUser } = require('../controllers/userController');

const router = require('express').Router();


router.get('/:id/channels', getUserAndUsersGroup);
router.patch('/:id',updateUser)
router.get('/:id', findById);
router.get('/', allUsers);
// router.post('/' ,createUser)

module.exports = router;
