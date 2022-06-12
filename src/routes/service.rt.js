const router = require('express').Router()
const serviceController = require('../controllers/service.ctrl')

router.get('/',  serviceController.list)
router.get('/:id',  serviceController.show)
router.post('/',  serviceController.store)
router.post('/:id',  serviceController.update)
router.post('/filter/filter-group',  serviceController.filter)
router.post('/remove/:id',  serviceController.delete)


module.exports = router