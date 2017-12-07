// REPORT CONTROLLER
const express = require('express');
const router  = express.Router();
const TimeSheet   = require('../models/timesheet');
const User   = require('../models/users');

// Reports page landing
router.get('/', async (req, res) => {
   const userArr = await User.find();
   res.render('pages/report.ejs', {
      user: req.session,
      userArr: userArr,
      dataArr: []
   })
});

router.post('/run', async (req, res) => {
   console.log('body:', req.body);
   const userArr = await User.find();
   const dataArr = await TimeSheet.find(req.body)
   //console.log(dataArr);
   res.render('pages/report.ejs', {
      user: req.session,
      userArr: userArr,
      dataArr: dataArr
   })
});


module.exports = router;
