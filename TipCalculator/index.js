const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3005, function() {
  // listen on port 3005
  console.log('server is listening');
});

// CALC
app.get('/tipcalculator', function(req, res) {
  // s = grba(34,56,78, 0.3);
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();

  const color = `rgba(${r},${g},${b},${a})`;
  console.log(color);

  res.render('tipcalculator', {color});

});

app.post('/tipcalculator', function(req, res) {
  console.log(('body:', req.body));
  const amt = req.body.amt * 1;
  const tip = req.body.tip * 1; // '10%'
  console.log('amt: ', amt);
  let tipAmt = amt * tip /100;
  // let tipAmt = amt * parseFloat(tip);
  console.log('tip: ', tip);
  console.log('tipAmt: ', tipAmt);
  res.render('tipcalculator', {amt, tip, tipAmt});
});
