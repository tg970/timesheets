const express  = require('express');
const session  = require('express-session');
const mongoose = require('mongoose');
const morgan   = require('morgan');
const methodOverride = require('method-override');
const app      = express();

// set port, process.env.PORT
const PORT     = process.env.PORT || 3000;

// connect to database, process.env.MONGODB_URI
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/timesheet_app';
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;

// test db connection
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo Running Port: ', mongoURI));

// Middleware
app.use(express.static ('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(session({
	 secret: "kickasstakenames",
	 resave: false,
	 saveUninitialized: false
}));

// Controllers
const sessionController = require('./controllers/session.js');
const timesheetController = require('./controllers/timesheet.js');
const homeController = require('./controllers/home.js');
const reportController = require('./controllers/report.js');

app.use('/user', sessionController);
app.use('/timesheet', timesheetController);
app.use('/home', homeController);
app.use('/report', reportController);


// Root Route
app.get('/', (req, res) => res.redirect('/home'));

// :ear
app.listen(PORT, () => {
  console.log('TimeSheets: ', PORT);
});
