// TIMESHEET CONTROLLER
const express = require('express');
const router  = express.Router();

// New Route
router.get('/new', (req, res) => {
   if (true) { //req.session.logged
      res.render('pages/new.ejs');
   } else {
      res.redirect('/user/login');
   };
});

router.post('/newTS', async (req, res) => {
   try {
      console.log(req.body);
      //const timeRec = Timesheet.create(req.body)
      //console.log(timeRec);
      res.redirect('/timesheet/new')
   } catch (err) {
      console.log(err.message);
   }
})

module.exports = router;
