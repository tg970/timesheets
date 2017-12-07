// REPORT CONTROLLER
const express = require('express');
const router  = express.Router();
const TimeSheet   = require('../models/timesheet');

// Reports page landing
router.get ('/', (req, res) => {
   res.render('pages/report.ejs')
});


module.exports = router;
