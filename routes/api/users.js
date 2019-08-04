const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route api/users
// @desc Register new user
// @access Public
router.post('/', (req, res) => {
    const {} = req.body;
});

module.exports = router;
