var express = require('express');
var router = express.Router();
var _mysql = require('./database.js');

// to check the polygon area    
router.get('/', function(req, res, next) {
  var sqlQuery= "SELECT * FROM coordinates_details ORDER BY id DESC LIMIT 1;";
  _mysql.query(sqlQuery,function(error,results,fields){
    if (error) console.log(error);
    else{
            obj = {finalCoordinates: results[0].lat_lng};
            res.render('checkArea', obj); 
        }
    });
});

module.exports = router;
