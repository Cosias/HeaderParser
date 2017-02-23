var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Header Parser' });
// });

router.get('/',function(req,res){
	var ipAddress = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;	
    var software = req.headers['user-agent'].split(')')[0].split('(')[1];
	var language = req.headers['accept-language'].split(',')[0];

	res.json({"ipAddress":ipAddress, "language":language, "software": software});
});

module.exports = router;
