const { Router } = require('express')
const { check } = require('express-validator')
const {
  getServices,
  createService,
} = require('../controllers/service.controller')

const router = Router()

router.get('/', getServices)

router.post('/', createServices)

module.exports = router
