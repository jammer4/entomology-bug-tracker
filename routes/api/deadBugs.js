const express = require('express');
const router = express.Router();

const DeadBug = require('../../models/DeadBug');

router.get('/', (req, res) => {
    DeadBug.find()
        .then(items => res.status(200).json(items));
});

router.post('/', (req, res) => {
    const newBug = new DeadBug({
        description: req.body.description,
        priority: req.body.priority,
        developer: req.body.developer
    });

    newBug.save()
        .then(item => res.status(200).json(item));
});

module.exports = router;