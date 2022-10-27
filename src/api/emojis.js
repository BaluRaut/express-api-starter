const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['😀', '😳', 'lllllllllllllllllllllllllllllllllllllllllllllllll']);
});

module.exports = router;
