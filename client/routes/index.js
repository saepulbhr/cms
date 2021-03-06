var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Content Managemen System' });
});

router.get('/login', (err, res) =>{
  res.render('login')
});

router.get('/home', (err, res)=>{
  const path = 1;
  res.render('home', {title: 'Content management System',path})
})

router.get('/data', (err, res)=>{
  const path = 2;
  res.render('data', {title: 'Content management system', path})
})

router.get('/dataDate', (err, res)=>{
  const path = 3;
  res.render('datadate', {title: 'Conten managemen system', path})
})
router.get('/maps', (err, res)=>{
  const path = 4;
  res.render('maps', {title:'Content management system', path})
})

router.get('/bar', (err, res)=>{
  res.render('bar')
})

router.get('/pie', (err, res)=>{
  res.render('pie')
})


router.get('/line', (err, res)=>{
  res.render('line')
})

router.get('/map', (err, res)=>{
  res.render('map')
})





module.exports = router;
