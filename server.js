const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, This is the Express server for the task 4.1!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
