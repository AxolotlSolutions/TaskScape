const express = require('express');
const db = require('../db.js');

const taskController = {}

taskController.addTask = (req, res, next) => {

};

taskController.getTask = async (req, res, next) => {
  try {
    // Grab array of ALL values in task table using await db.query() and store in a variable
    const everyTask = await db.query('SELECT * FROM task');
    // store rows in res.locals.tasklist
    res.locals.tasklist = everyTask.rows;
    // router 
    return next();
  }
  catch (err) {
    return next({
      log: 'Express error with middleware function taskController.getTask',
      message: { err: 'Express error with middleware function taskController.getTask' }
    })
  };
};

taskController.deleteTask = (req, res, next) => {

};



// Stretch features
taskController.updateTask = (req, res, next) => {
  // 
};

module.exports = taskController;