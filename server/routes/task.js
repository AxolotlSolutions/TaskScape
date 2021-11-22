const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

// requests to '/task'

//addTask - routes to the taskController.addTask method, the method points back here after completion and confirmation is sent back to client
router.post('/', taskController.addTask, (req, res, next) => {
  res.status(200).json({ message: 'Task added' });
});

//getTask - routes to the taskController.getTask method, the returned response from the method is jsonified and sent to the client
router.get('/', taskController.getAllTasks, (req, res, next) => {
  // pass request to taskController.getTask, which will return an array of all task objects in DB
  res.status(200).json(res.locals.tasklist) // or whatever res.locals we decide to store our data in
});

//deleteTask - routes to the taskController.deleteTask method, the method points back here after completion and confirmation is sent back to client
router.delete('/', taskController.deleteTask, (req, res, next) => {
  res.status(200).json({ message: 'Task Deleted' });
})

//exports the router object
module.exports = router;