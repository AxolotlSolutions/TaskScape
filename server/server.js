const express = require('express');
const path = require('path'); // NEW
const router = express.Router();

const app = express();
const port = process.env.PORT || 3000;

// /dist/ folder path
const DIST_DIR = path.join(__dirname, '../dist');
// ./dist/index.html file path
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.use(express.static(DIST_DIR));
// parse incoming requests
app.use(express.json());
app.use(express.urlencoded());

// Send GET requests to '/' to index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});



// placeholder to respond to api requests
// app.get('/api', (req, res) => {
//   res.send(mockResponse);
// });


// Routers
// Tasks
const taskRouter = require('./routes/task.js');
// Rewards
const rewardsRouter = require('./routes/rewards.js');

// GET REQUEST to '/' serves dashboard

app.use('/task', taskRouter);
app.use('/rewards', rewardsRouter);

// Catch all request handler
app.use((req, res) => {
  res.sendStatus(418)
})

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught an unknown middleware error',
    status: 500,
    message: { err: 'Internal Service Error' }
  };

  // const errorObj = Object.assign({}, defaultError, err)
  const errorObj = ({ ...defaultError, ...err })
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message)
})

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});