// HOME CONTROLER
const express = require('express');
const router  = express.Router();

// models

// Index Route
router.get('/', (req, res) => {
   if (true) { //req.session.logged
      res.render('pages/home.ejs');
   } else {
      res.redirect('/user/login');
   };
});

module.exports = router;
