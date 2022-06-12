const router = require('express').Router()
const ServiceTypeController = require('../controllers/serviceType.ctrl')

router.get('/',  ServiceTypeController.list)
router.get('/:id',  ServiceTypeController.show)
router.post('/',  ServiceTypeController.store)
router.post('/:id',  ServiceTypeController.update)
router.post('/remove/:id',  ServiceTypeController.delete)


module.exports = router