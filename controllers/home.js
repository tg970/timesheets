// HOME CONTROLER
const express = require('express');
const router  = express.Router();

// models

// Index Route
router.get('/', (req, res) => {
   if (req.session.logged) {
      res.render('pages/home.ejs', {user:req.session});
   } else {
      res.redirect('/user/login');
   };
});

module.exports = router;
