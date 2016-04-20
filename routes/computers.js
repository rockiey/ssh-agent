var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:ip', function(req, res, next) {
    console.log(req);
    res.send('respond with a ip');
});

module.exports = router;