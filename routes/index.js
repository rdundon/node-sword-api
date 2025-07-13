const express = require('express');
const router = express.Router();

const bibleController = require('../controllers/bible.controller');

router.get('/', bibleController);

module.exports = router;
