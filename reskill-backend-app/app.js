// Requiring module
const express = require('express');

const cors = require('cors')

// Creating express object
const app = express();

// axios.<method> will now provide autocomplete and parameter typings
const axios = require('axios').default;

app.use(cors())

// Handling GET request
app.get('/', (req, res) => { 
    res.send('A simple Node App is '
        + 'running on this server') 
    res.end() 
})

var posts = []
var photos = []

// Getting the 1st endpoint
axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    // handle success
    // console.log(response.data);
    posts = response.data;
  })
  .catch(error => {
    // handle error
    console.error(error);
  });

  // Getting the 2nd endpoint
axios.get("https://jsonplaceholder.typicode.com/photos")
.then(response => {
  // handle success
  // console.log(response.data);
  photos = response.data;
})
.catch(error => {
  // handle error
  console.error(error);
});

// Making a posts endpoint
app.get('/posts', (req, res) => { 
    //res.json(posts)
    //res.json(photos)
    res.json(posts.concat(photos))
    res.end() 
})

// Getting the singlepost from the frontend endpoint
axios.get("http://localhost:5173/")
  .then(response => {
    // handle success
    // console.log(response.data);
    homepage = response.data;
  })
  .catch(error => {
    // handle error
    console.error(error);
  });

// Making a homepage endpoint
app.get('/homepage', (req, res) => { 
    res.send()
    res.end() 
})

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
