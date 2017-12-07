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
   searchParams = {}
   if (req.body.name) { searchParams.name = req.body.name }
   if (req.body.prop) { searchParams.prop = req.body.prop }
   if (req.body.act) { searchParams.act = req.body.act }
   console.log(searchParams);
   const userArr = await User.find();
   const dataArr = await TimeSheet.find(searchParams)
   //console.log(dataArr);
   res.render('pages/report.ejs', {
      user: req.session,
      userArr: userArr,
      dataArr: dataArr
   })
   // res.send({
   //    user: req.session,
   //    userArr: userArr,
   //    dataArr: dataArr
   // })
});


module.exports = router;
