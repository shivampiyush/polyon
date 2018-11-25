var express = require('express');
var router = express.Router();
var _mysql = require('./database.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//sending the coordinates to next page 
router.post('/data', function(req, res) {
  var polyPoints = req.body.formvar;  
  var points = polyPoints.split("Polygon Points:")
  var lat_lng = points[1].split("<br>") 
  var finalCoordinates = lat_lng.slice(1, -1);
  var sqlQuery= "INSERT INTO coordinates_details(lat_lng) VALUES ('"+finalCoordinates+"')";
  _mysql.query(sqlQuery,function(error,results,fields){
    if (error) console.log(error);
    else{
             res.redirect('/checkArea');
        }
    });
})

module.exports = router;
