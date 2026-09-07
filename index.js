require('dotenv').config()
const express = require('express');

const app = express()   // express app created or browser server application created
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {       // registering a route 
  res.send('Hello World!')
})
app.get('/about', (req, res) => {  // registering a 2nd route
    res.send('<h2>About Page</h2>')
})

app.listen(PORT, () => {     // starts the server and listens on the specified port
  console.log(`Example app listening on port ${PORT}`)
})