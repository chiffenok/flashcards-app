const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    console.log(token);
    if (!token) return res.status(401).json({ msg: 'No auth' });
    console.log(process.env.JWT_KEY);
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;
