const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/', (req, res) => {
    User.find()
        .then(items => res.json(items));
});

router.get('/:username', (req, res) => {
    User.find()
        .then(users => users.filter(user => user.username === req.params.username))
        .then(item => res.json(item))
        .catch(e => res.json({ success: false }));
});

module.exports = router;