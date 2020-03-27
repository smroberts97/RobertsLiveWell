const express = require('express');
const router = express.Router();

//Fish Model
const Fish = require('../../models/Fish');

// @route GET api/fishes
// @desc Get All Fishes
// @access Public

router.get('/', (req, res) => {
    Fish.find()
        .sort({ date: -1})
        .then(fishes => res.json(fishes));
});

// @route POST api/fishes
// @desc Create a Fish
// @access Public

router.post('/', (req, res) => {
    const newFish = new Fish({
        name: req.body.name
    });

    newFish.save().then(fish => res.json(item));
});

// @route DELETE api/fishes/:id
// @desc Delete a Fish
// @access Public

router.delete('/:id', (req, res) => {
    Fish.findById(req.params.id)
        .then(fish => fish.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});



module.exports = router;
