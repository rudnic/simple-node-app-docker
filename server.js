const express = require('express');
const res = require('express/lib/response');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log("ITS WORKING");
})

