const router = require("express").Router();
const { getAll, getByUser, createOne, updateStatus, deleteOne } = require('../controllers/order');

router.get('/', getAll);
router.get('/:userID', getAll);
router.post('/:userID', createOne);
router.patch('/status/:orderID', updateStatus);
router.delete('/:orderID', deleteOne);

module.exports = router