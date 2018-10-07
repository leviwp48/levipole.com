/*
  This is the main router file.
*/
const router = require('express').Router();

// Projects Model
const Projects = require('../../models/Projects');

// @route   GET api/projects
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) =>{
    Projects.find()
        .sort({ name: -1})
        .then(projects => res.json(projects))
});

// @route   POST api/projects
// @desc    Create A Post
// @access  Public
router.post('/', (req, res) =>{
    const newProject = new Projects({
        name: req.body.name
    });
    newProject.save().then(project => res.json(project));
});

// @route   DELETE api/projects
// @desc    DELETE A Post
// @access  Public
router.delete('/', (req, res) =>{
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
