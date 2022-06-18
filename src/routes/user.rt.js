const router = require('express').Router()
const userController = require('../controllers/user.ctrl')

router.get('/',  userController.list)
router.get('/:id',  userController.show)
router.post('/',  userController.store)
router.post('/:id',  userController.update)
router.post('/filter/filter-group',  userController.filter)
router.post('/remove/:id',  userController.delete)


module.exports = router