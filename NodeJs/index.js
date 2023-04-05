const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db');
const data_route = require('./routers/dataRoute');
const cors = require('cors');

var app = express();
app.use(cors());
app.use('/data',data_route);

app.listen(3000, () => console.log('Server started...'));
