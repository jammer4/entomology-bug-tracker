const express = require('express');
const router = express.Router();

const Bug = require('../../models/Bug');

router.get('/', (req, res) => {
    Bug.find()
        .then(items => res.status(200).json(items));
});

router.post('/', (req, res) => {
    const newBug = new Bug({
        description: req.body.description,
        priority: req.body.priority,
        developer: req.body.developer
    });

    newBug.save()
        .then(item => res.status(200).json(item));
});

router.delete('/:id', (req, res) => {
    Bug.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ success: true }))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;