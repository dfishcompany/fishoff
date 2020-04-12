const router = require("express").Router();
const { getAll, getOne, create, edit, deleteOne } = require('../controllers/category');

router.get('/', getAll);
router.get('/:categoryID', getOne);
router.post('/', create);
router.patch('/:categoryID', edit);
router.delete('/:categoryID', deleteOne);

module.exports = router