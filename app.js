const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/*----------------------------------------------------------------*/
//Routers/Controllers
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
let contactRouter = require('./routes/contact');
let projectsRouter = require('./routes/projects');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, _next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
