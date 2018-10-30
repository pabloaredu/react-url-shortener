const express = require('express')
const { Link } = require('../models/schema')
const router = express.Router()


router.get('/', async (req, res) => {
  const links = await Link.query()
  res.json(links)
})


module.exports = router