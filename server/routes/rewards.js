const express = require('express');
const rewardsController = require('../controllers/rewardsController');
const router = express.Router();

// requests to '/rewards'

//getRewards
router.get('/', rewardsController.getAllRewards, (req, res, next) => {
  res.status(200).json(res.locals.rewardsList)
});


//addRewards
router.post('/', rewardsController.addReward, (req, res, next) => {
  // pass request to rewardsController.getTask, which will return an array of all task objects in DB
  res.status(200).json({ message: 'Reward added' });
  // or whatever res.locals we decide to store our data in
});

//deleteRewards
router.delete('/', rewardsController.deleteReward, (req, res, next) => {
  res.status(200).json({ message: 'Reward Deleted' });
})


module.exports = router;