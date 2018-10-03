/*
  This is the main router file.
*/
const router = require('express').Router();

// Projects Model
const Projects = require('../../models/Projects');

// @route   GET api/projects
// @desc    Get All Projects
// @access  Public
router.get('/', (req, res) =>{
    Projects.find()
        .sort({ name: -1})
        .then(projects => res.json(projects))
});

// @route   POST api/projects
// @desc    Create A Project
// @access  Public
router.post('/', (req, res) =>{
    const newProject = new Projects({
        name: req.body.name
    });
    newProject.save().then(project => res.json(project));
});

// @route   DELETE api/projects
// @desc    Delete A Project
// @access  Public
router.delete('/:id', (req, res) =>{
    Projects.findById(req.params.id)
        .then(Projects => Projects.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
