const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

// @route api/auth
// @desc Auth user
// @access Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ email }).then(user => {
        if (!user) return res.status(400).json({ msg: 'User does not exists' });
        // Validate password
        bcrypt.compare(password, user.password).then(isMatch => {
            // User sign in false
            if (!isMatch)
                return res.status(400).json({ msg: 'Invalid credentials' });
            // User sign in true
            jwt.sign(
                { id: user.id },
                process.env.JWT_KEY,
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    });
                }
            );
        });
    });
});

module.exports = router;
