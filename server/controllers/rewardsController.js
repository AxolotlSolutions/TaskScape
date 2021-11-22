const express = require('express');
const db = require('../db');
const pool = require('../db');

const rewardsController = {};

rewardsController.addReward = async (req, res, next) => {
  try {
    const { name, done, value } = req.body;

    const SQLquery = `INSERT INTO rewards (name, done, value) VALUES ('${name}', '${done}', '${value}')`;
    const results = await db.query(SQLquery);
    return next();
  } catch (err) {
    return next({
      log: `rewardsController.addReward: ERROR: ${err}`,
      message: { err: 'Error occurred in rewardsController.addReward. Check server logs for more details.' }
    })
  };
}

rewardsController.getAllRewards = async (req, res, next) => {
  try {
    const results = await db.query('SELECT * from rewards');
    res.locals.rewardsList = results.rows;
    return next();
  } catch (err) {
    return next({
      log: `rewardsController.getAllRewards: ERROR: ${err}`,
      message: { err: 'Error occurred in rewardsController.getAllRewards. Check server logs for more details.' }
    })
  };
};

rewardsController.deleteReward = async (req, res, next) => {
  try {
    const { id } = req.body;

    const SQLquery = `DELETE FROM rewards WHERE rewards_id='${id}'`;
    const results = await db.query(SQLquery);
    return next();
  } catch (err) {
    return next({
      log: `rewardsController.deleteReward: ERROR: ${err}`,
      message: { err: 'Error occurred in rewardsController.deleteReward. Check server logs for more details.' }
    })
  };
};

module.exports = rewardsController;