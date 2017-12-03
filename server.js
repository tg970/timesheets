const express  = require('express');
const session  = require('express-session');
const mongoose = require('mongoose');
const morgan   = require('morgan');
//const bcrypt   = require('bcrypt');
const app      = express();
const PORT     = 3000;

// connect to database
const mongoURI = 'mongodb://localhost:27017/timesheet_app';
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

// test db connection
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo Running Port: ', mongoURI));

// Middleware
app.use(express.static ('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(session({
	 secret: "kickasstakenames",
	 resave: false,
	 saveUninitialized: false
}));

// Controllers
const sessionController = require('./controllers/session.js');
const timesheetController = require('./controllers/timesheet.js');
const homeController = require('./controllers/home.js')

app.use('/user', sessionController);
app.use('/timesheet', timesheetController);
app.use('/home', homeController);


// Root Route
app.get('/', (req, res) => res.redirect('/home'));


// :ear
app.listen(PORT, () => {
  console.log('TimeSheets: ', PORT);
});
