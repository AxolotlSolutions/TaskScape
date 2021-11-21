const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

// '/task'

//addTask

//getTask
router.get('/', taskController.getTask, (req, res, next) => {
  // pass request to taskController.getTask, which will return an array of all task objects in DB
  res.status(200).json(res.locals.tasklist) // or whatever res.locals we decide to store our data in
});

//deleteTask


module.exports = router;