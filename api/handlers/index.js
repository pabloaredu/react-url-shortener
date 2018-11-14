var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  // res.render('index', { title: 'Express' });
  const links = await Link.query()
  res.json(links)
});

module.exports = router;