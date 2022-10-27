const express = require('express');

const emojis = require('./emojis');
var turf = require('@turf/boolean-intersects');
const geof = require("../foo.");
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'APIok   okokokokkokoko - 👋🌎🌍🌏',
    record: geof.features[0]
  });
});

router.use('/emojis', emojis);

module.exports = router;
