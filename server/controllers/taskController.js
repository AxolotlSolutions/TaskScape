const express = require('express');
const db = require('../db.js');

const taskController = {}

taskController.addTask = async (req, res, next) => {
  try {
    const { name, done, value } = req.body;

    const SQLquery = `INSERT INTO task (name, done, value) VALUES ('${name}', '${done}', '${value}')`;
    const results = await db.query(SQLquery);
    return next();
  } catch (err) {
    return next({
      log: `taskController.addTask: ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.addTask. Check server logs for more details.' }
    })
  }
};

taskController.getAllTasks = async (req, res, next) => {
  try {
    const everyTask = await db.query('SELECT * FROM task');
    res.locals.tasklist = everyTask.rows;
    return next();
  } catch (err) {
    return next({
      log: `taskController.getTask: ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.getTask. Check server logs for more details.' }
    })
  };
};

taskController.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.body;

    const SQLquery = `DELETE FROM task WHERE task_id='${id}'`;
    const results = await db.query(SQLquery);
    return next()
  } catch (err) {
    return next({
      log: `taskController.deleteTask: ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.getTask. Check server logs for more details.' }
    })
  }
};



// Stretch features
taskController.updateTask = (req, res, next) => {
  // 
};

module.exports = taskController;