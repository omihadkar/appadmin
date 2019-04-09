const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const jwt=require('jsonwebtoken');
const expressJwt=require('express-jwt');

const person = require('./routes/admin.routes'); // Imports routes for the products
const app = express();
app.use(expressJwt({secret: 'super-shared-secret'}).unless({path: ['/admin/register','/admin/auth','/admin/test',
'/admin/subuser']}));

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://<USERNAME>:<PASSWORD>@cluster0-l5mjh.mongodb.net/test?retryWrites=true';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', person);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});