const express = require('express');
const router = express.Router();

/* GET links listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
    id: 1,
    linkname: "www.google.com"
  }, {
    id: 2,
    linkname: "www.cto.ai"
  }]);
});

module.exports = router;