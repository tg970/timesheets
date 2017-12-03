const express = require('express');
const router = express.Router();
const User   = require('../models/users');
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => {  //any route will work
	res.render('pages/login.ejs', {
      message: req.session.message
   })
});

router.post('/login', async (req, res) => {
   try {
      const user = await User.findOne({username: req.body.username});
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.message = '';
        req.session.username = req.body.username;
        req.session.logged  = true;
        //console.log(req.session, req.body)
        res.redirect('/')
     } else {
        console.log('bad password');
        req.session.message = 'Username or password are incorrect';
        res.redirect('/user/login')
     }
   } catch (err) {
      console.log(err.message);
      req.session.message = 'Username or password are incorrect';
      res.redirect('/user/login')
   }
});

module.exports = router;
