const express = require('express');

const emojis = require('./emojis');
var turf = require('@turf/turf');
const geof = require("../geojson");
const router = express.Router();
router.post('/', (req, res) => {
  const re = [];
  const productLists = geof.features;
console.log(req.body);
req.body.forEach(element => {
  console.log(element);
  var placeOne = turf.point([Number(element[1].toFixed(2)),Number(element[0].toFixed(2))]);
  let response = null;
  for (var j = 0; j <  geof.features.length && !response; j++) {
    var placeTwo = productLists[j]; 
    var conflict = turf.booleanIntersects(placeOne, parcel2);
    if (conflict) {
      response = placeTwo.properties;
      re.push(response);
    }
  }

});
console.log(re);
  res.json({
    record: re
  });
});


module.exports = router;
