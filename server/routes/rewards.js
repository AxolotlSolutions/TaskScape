const express = require('express');
const rewardsController = require('../controllers/rewardsController');
const router = express.Router();

// requests to '/rewards'

//addRewards - routes to the rewardsController.addReward method, the method points back here after completion and confirmation is sent back to client
router.post('/', rewardsController.addReward, (req, res, next) => {
  // pass request to rewardsController.getTask, which will return an array of all task objects in DB
  res.status(200).json({ message: 'Reward added' });
  // or whatever res.locals we decide to store our data in
});

//getRewards - routes to the rewardsController.getAllRewards method, the returned response from the method is jsonified and sent to the client
router.get('/', rewardsController.getAllRewards, (req, res, next) => {
  res.status(200).json(res.locals.rewardsList)
});

//deleteRewards - routes to the rewardsController.deleteReward method, the method points back here after completion and confirmation is sent back to client
router.delete('/', rewardsController.deleteReward, (req, res, next) => {
  res.status(200).json({ message: 'Reward Deleted' });
})

//exports the router object
module.exports = router;