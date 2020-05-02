const router = require("express").Router();
const { getAll, login, deleteOne } = require('../controllers/profile');

router.get('/', getAll);
router.post('/login', login);
router.delete('/:profileID', deleteOne);

module.exports = router