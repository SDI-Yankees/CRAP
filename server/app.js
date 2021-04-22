var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var trainingRouter = require('./routes/training.js')
var loginRouter = require('./routes/login.js')
var userRouter = require('./routes/user.js')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: true, credentials: true}));

app.use('/index', indexRouter);
app.use('/trainings', trainingRouter)
app.use('/login', loginRouter)
app.use('/user', userRouter)




module.exports = app;
