const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/DB');

const meetings = require('./Routes/MeetingsRoute');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB_CONNECTION_STRING).then(() => {
	console.log('Database is connected')
}).catch(err => {
	console.log('Can not connect to the database' + err)
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/meetings', meetings);

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
	console.log('Listening on port ' + port);
});