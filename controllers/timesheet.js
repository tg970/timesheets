// TIMESHEET CONTROLLER
const express = require('express');
const router  = express.Router();
const TimeSheet   = require('../models/timesheet');
// const methodOverride = require('method-override');

// New Route
router.get('/new', async (req, res) => {
   if (true) { //req.session.logged
      let timeArr = []
      for (let row in req.session.timeRecs) {
         let timeRec = await TimeSheet.findById(req.session.timeRecs[row]);
         timeArr.push(timeRec)
      }
      let oneRec = await TimeSheet.findById(req.params.id)
      //console.log('timeArr:',timeArr);
      res.render('pages/newTimesheet.ejs', {
         timeRecs:timeArr,
         edit:false,
         editId:null,
         hotRow:null,
         oneRec:null
      });
   } else {
      res.redirect('/user/login');
   };
});

router.post('/newTS', async (req, res) => {
   try {
      let newTimeRec = req.body
      newTimeRec.name = req.session.name
      // add userid to newTimeRec
      // rate and math for time rec charge
      // console.log(newTimeRec);
      const timeRec = await TimeSheet.create(newTimeRec)
      req.session.timeRecs.push(timeRec)
      res.redirect('/timesheet/new')
   } catch (err) {
      console.log(err.message);
   }
})

router.get('/edit/:id', async (req,res) => {
   let oneRec = await TimeSheet.findById(req.params.id)
   let timeArr = []
   for (let row in req.session.timeRecs) {
      let timeRec = await TimeSheet.findById(req.session.timeRecs[row]);
      timeArr.push(timeRec)
   }
   //console.log('edit route, oneRec:', oneRec);
   res.render('pages/newTimesheet.ejs', {
      timeRecs:timeArr,
      edit:true,
      editId:req.params.id,
      hotRow:null,
      oneRec:oneRec
   });
   //console.log(req.session.timeRecs);
   //res.send('edit route working')
});

router.put('/:id', async (req, res) => {
   //console.log(req.body);
   const editedTimeRec = await TimeSheet.findByIdAndUpdate(req.params.id, req.body);
   res.redirect('/timesheet/new')
});

router.delete('/:id/:index', async (req, res) => {
   console.log('delete route firing');
   const delTimeRec = await TimeSheet.findByIdAndRemove(req.params.id);
   req.session.timeRecs.splice(req.params.index,1);
   res.redirect('/timesheet/new');
});



module.exports = router;
