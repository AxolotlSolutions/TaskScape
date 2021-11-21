const express = require('express');
//path helps you reference a file. it takes you to a specific file .
const path = require('path'); // NEW

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname,'..'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'src', 'index.html'); // NEW
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
 
app.use()
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(DIST_DIR)); // NEW
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
  // console.log("here")
  // console.log(req)
  // res.send("arevshjkhds")
  res.sendFile(HTML_FILE); // EDIT
});

app.post('/createToDo', (req,res) =>{
  console.log('hello')
  console.log(req)
  res.send('hello')
})
app.listen(port, function () {
  console.log('App listening on port: ' + port);
});


