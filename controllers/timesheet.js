// TIMESHEET CONTROLLER
const express = require('express');
const router  = express.Router();
const TimeSheet   = require('../models/timesheet');

// New Route
router.get('/new', async (req, res) => {
   if (true) { //req.session.logged
      let timeArr = []
      for (let row in req.session.timeRecs) {
         let timeRec = await TimeSheet.findById(req.session.timeRecs[row]);
         timeArr.push(timeRec)
      }
      //console.log(timeArr);
      res.render('pages/new.ejs', {timeRecs:timeArr});
   } else {
      res.redirect('/user/login');
   };
});

router.post('/newTS', async (req, res) => {
   try {
      let newTimeRec = req.body
      newTimeRec.name = req.session.name
      //console.log(newTimeRec);
      const timeRec = await TimeSheet.create(newTimeRec)
      req.session.timeRecs.push(timeRec.id)
      res.redirect('/timesheet/new')
   } catch (err) {
      console.log(err.message);
   }
})

module.exports = router;
