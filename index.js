require('dotenv').config();
const express = require('express');
require('express-async-errors');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());

mongoose.connect(process.env.MongoURI, {useNewUrlParser: true, useUnifiedTopology:  true});

app.use(express.json());
app.use('/', require('./routes/poker-preflop'));

const port = process.env.PORT || 8080;

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});