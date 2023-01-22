var express = require('express');
var router = express.Router();
const requestParser = require('./request-parser');
const companyIterator = require('./company-iterator');
const responsePreparer = require('./response-preparer');

/* GET content from news sources */
router.get('/', function(req, res, next) {
    const requests = requestParser.parse(req);
    if(requests){
        results = companyIterator.iterate(requests);
        if(results){
            res = responsePreparer.prepare(results);
        }
    }
  res.send('respond with a resource');
});

module.exports = router;