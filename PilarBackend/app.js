const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const {connectToDB} = require('./src/db/mongoose');
const indexRouter = require('./src/routes/index.routes');
const usersRouter = require('./src/routes/users.routes');
const stadiumsRouter = require('./src/routes/stadiums.routes');

const app = express();

connectToDB();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//complete with your resource
app.use(indexRouter);
app.use(usersRouter);
app.use(stadiumsRouter);

module.exports = app;
