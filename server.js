const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log(`\nNext Meal Back End`);
  console.log(`Path: 127.0.0.1:3000`);
  console.log(`${new Date().toString()}\n`);
});
