var express = require('express');
var router = express.Router();
var weather = require('weather-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var handle=false
  res.render('index',{handle})
});
router.post('/showweather',function(req,res){

  weather.find({search: `${req.body.city}`, degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   var arr =(JSON.stringify(result, null, 2))
var arr2=JSON.parse(arr)
var details={
  city:arr2[0].location.name,
  temperature:arr2[0].current.temperature,
  sky:arr2[0].current.skytext,
  date:arr2[0].current.date,
  min:arr2[0].forecast[0].low,
  max:arr2[0].forecast[0].high   
}
var handle=true
res.render("index",{handle,details})

  });
  

})

module.exports = router;
