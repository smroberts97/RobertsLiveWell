const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const fishes = require('.routes/api/fishes');

const app = express();

//BodyParser middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/fishes', fishes)  

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port $(port)'));


