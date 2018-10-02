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

module.exports = router;
