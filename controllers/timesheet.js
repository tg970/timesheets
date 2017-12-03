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

module.exports = router;
