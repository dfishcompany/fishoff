const router = require("express").Router();
const { getAll, getByCategory , getOne, createMany, create, edit, deleteOne } = require('../controllers/foodItem');

router.get('/', getAll);
router.get('/category/:categoryID', getByCategory);
router.get('/:foodItemID', getOne);
router.post('/:categoryID/bulk', createMany);
router.post('/:categoryID', create);
router.patch('/:foodItemID', edit);
router.delete('/:foodItemID', deleteOne);

module.exports = router