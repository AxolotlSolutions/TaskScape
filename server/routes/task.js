const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

// requests to '/task'

//addTask
router.post('/', taskController.addTask, (req, res, next) => {
  res.status(200).json({ message: 'Task added' });
});

//getTask
router.get('/', taskController.getAllTasks, (req, res, next) => {
  // pass request to taskController.getTask, which will return an array of all task objects in DB
  res.status(200).json(res.locals.tasklist) // or whatever res.locals we decide to store our data in
});

//deleteTask
router.delete('/', taskController.deleteTask, (req, res, next) => {
  res.status(200).json({ message: 'Task Deleted' });
})

module.exports = router;