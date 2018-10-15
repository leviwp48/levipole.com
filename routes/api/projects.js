/*
  This is the main router file.
*/

// Get express router 
const router = require('express').Router();

// Projects model from the model folder
const Projects = require('../../models/Projects');

// @route   GET api/projects
// @desc    Get All Items
// @access  Public
// Will grab projects in descending order
router.get('/', (req, res) =>{
    Projects.find()
        .sort({ name: -1})
        .then(projects => res.json(projects))
});

// @route   POST api/projects
// @desc    Create A Post
// @access  Public
// Will create new projects using the requests body name 
router.post('/', (req, res) =>{
    const newProject = new Projects({
        name: req.body.name
    });
    newProject.save().then(project => res.json(project));
});

// @route   DELETE api/projects
// @desc    DELETE A Post
// @access  Public
// Will delete projects with a certain id
router.delete('/:id', (req, res) =>{
  Projects.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
