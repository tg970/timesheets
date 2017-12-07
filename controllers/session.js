const express = require('express');
const router = express.Router();
const User   = require('../models/users');
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => {
	res.render('pages/login.ejs', {
      message: req.session.message
   })
});

router.post('/login', async (req, res) => {
   try {
      const user = await User.findOne({username: req.body.username});
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.message = '';
        req.session.name = user.name;
        req.session.super = user.super;
        req.session.admin = user.admin;
		  //req.session.userID = user._id;
		  req.session.timeRecs = [];
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

router.get('/newUser', (req, res) => {
	res.render('pages/newUser.ejs', {})
});

router.post('/newUser', async (req, res) => {
   //console.log(req.body);
   //Hash Password
   const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
   // Create a object for db entry
   const userDbEntry = {};
   userDbEntry.username = req.body.username;
   userDbEntry.password = passwordHash;
   userDbEntry.name = req.body.name
   if (req.body.admin) {
      userDbEntry.admin = true;
   } else {
      userDbEntry.admin = false;
   }
   if (req.body.super) {
      userDbEntry.super = true;
   } else {
      userDbEntry.super = false;
   }
   // New User db entry
   try {
      const user = await User.create(userDbEntry)
      //console.log(user)
      req.session.username = user.username;
      req.session.logged  = true;
      res.redirect('/')
   } catch(err) {
      console.log(err.message);
   }
})

router.get('/logout', (req, res) => {
   req.session.destroy();
   res.redirect('/');
});

module.exports = router;
