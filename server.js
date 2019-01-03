const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors())

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


// app.get(http://localhost:4000/)
// app.get(http://localhost:5000/)
// app.get(http://localhost:8000/)
// app.get(http://localhost:7000/)

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
