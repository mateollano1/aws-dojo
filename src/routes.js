const express = require('express')
const router = express.Router()
const getTodos = require('./services/get-todos')


router.get('/todos', getTodos)
module.exports = router