const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log('Connected to DB!!! WOW'));

app.use(express.json());

app.use('/api/user', authRoute);

app.listen(3100, () => console.log('The Server Is Up And Running!!!!! SO GOOD'));
