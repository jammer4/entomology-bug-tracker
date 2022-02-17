const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/', (req, res) => {
    User.find()
        .then(items => res.status(200).json(items));
});

router.get('/:username', (req, res) => {
    User.find()
        .then(users => users.filter(user => user.username === req.params.username))
        .then(item => res.status(200).json(item))
        .catch(e => res.status(400).json({ success: false }));
});

module.exports = router;