const router = require('express').Router()
const producstController = require('../controllers/product.ctrl')

router.get('/',  producstController.list)
router.get('/:id',  producstController.show)
router.post('/',  producstController.store)
router.post('/:id',  producstController.update)
router.post('/filter/filter-group',  producstController.filter)
router.post('/remove/:id',  producstController.delete)


module.exports = router