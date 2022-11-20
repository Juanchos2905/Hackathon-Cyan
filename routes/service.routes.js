const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares')

const {
  getServices,
  createService,
} = require('../controllers/service.controller')

const router = Router()

router.get('/', getServices)

router.post(
  '/',
  [
    check('name', 'El nombre del servicio es obligatorio').not().isEmpty(),
    check('description', 'La descripción es obligatoria').not().isEmpty(),
    check('product', 'El id del producto es requerido').not().isEmpty(),
    check('user', 'El usuario es obligatoria').not().isEmpty(),
    check('id', 'El email es obligatorio').not().isEmpty(),
    validateFields,
  ],
  createService
)

module.exports = router
