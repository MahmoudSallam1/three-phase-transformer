//jshint esversion:6
// ==================REQUIRING SOME PACKAGES====================================
let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let _ = require('lodash');


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));



// ==================GET ROUTING HERE====================================
app.get('/', function (req, res) {
  res.render('home');
});

app.get('/result', function (req, res) {
  res.render('result');
});

// ==================POSTING HERE================================================
app.post('/', function (req, res) {

  let type_of_connection = req.body.type__connection;
  console.log(type_of_connection);



  // y_y_connection
  if (type_of_connection === 'y_y') {

    let y__y_calc = {
      vl_primary: req.body.y__y_vl__primary,
      trans_rating: req.body.y__y_trans__rating,
      frequency: req.body.y__y_freq,
      turns_ratio: req.body.y__y_turn__ratio
    };


    let y__y_vp_primary, y__y_vl_secondary, y__y_vp_secondary, y__y_ip_primary, y__y_ip_secondary;

    y__y_vp_primary = Math.round(y__y_calc.vl_primary/Math.sqrt(3));
    y__y_vl_secondary = Math.round(y__y_calc.vl_primary * y__y_calc.turns_ratio);
    y__y_vp_secondary = Math.round(y__y_vl_secondary / Math.sqrt(3));
    y__y_ip_primary = Math.round((y__y_calc.trans_rating * 1000) / (y__y_calc.vl_primary * Math.sqrt(3)));
    y__y_ip_secondary = Math.round( y__y_ip_primary * y__y_calc.turns_ratio);

    let y__y_results = {
      vp_primary: y__y_vp_primary,
      vl_secondary: y__y_vl_secondary,
      vp_secondary: y__y_vp_secondary,
      ip_primary: y__y_ip_primary,
      ip_secondary: y__y_ip_secondary
    };
    res.render('result', { y__y_calc: y__y_calc, y__y_results: y__y_results, type_of_connection: type_of_connection });

  }


    // y_d_connection
  else if (type_of_connection === 'y_d') {
    let y__d_calc = {
      vl_primary: req.body.y__d_vl__primary,
      trans_rating: req.body.y__d_trans__rating,
      frequency: req.body.y__d_freq,
      turns_ratio: req.body.y__d_turn__ratio
    };


    let y__d_vp_primary, y__d_vl_secondary, y__d_ip_primary, y__d_il_secondary, y__d_ip_secondary;

    y__d_vp_primary = Math.round(y__d_calc.vl_primary/Math.sqrt(3));
    y__d_vl_secondary = Math.round(y__d_calc.vl_primary/ (y__d_calc.turns_ratio*Math.sqrt(3)));
    y__d_ip_primary = Math.round((y__d_calc.trans_rating * 1000) / (y__d_calc.vl_primary * Math.sqrt(3)));
    y__d_il_secondary = Math.round( y__d_ip_primary / Math.sqrt(3) * y__d_calc.turns_ratio);
    y__d_ip_secondary = Math.round(y__d_il_secondary / Math.sqrt(3));

    let y__d_results = {
      vp_primary: y__d_vp_primary,
      vl_secondary: y__d_vl_secondary,
      ip_primary: y__d_ip_primary,
      il_secondary: y__d_il_secondary,
      ip_secondary: y__d_ip_secondary
    };
    res.render('result', { y__d_calc: y__d_calc, y__d_results: y__d_results, type_of_connection: type_of_connection });

  }


  else if (type_of_connection === 'd_y') {
    let d__y_calc = {
      vl_primary: req.body.d__y_vl__primary,
      trans_rating: req.body.d__y_trans__rating,
      frequency: req.body.d__y_freq,
      turns_ratio: req.body.d__y_turn__ratio
    };


    let d__y_vp_primary, d__y_vl_secondary,d__y_vp_secondary, d__y_il_primary,d__y_ip_primary, d__y_ip_secondary;

    d__y_vp_primary = d__y_calc.vl_primary;
    d__y_vl_secondary = Math.round((Math.sqrt(3)*d__y_vp_primary)/d__y_calc.turns_ratio);
    d__y_vp_secondary = Math.round(d__y_vl_secondary/Math.sqrt(3));
    d__y_il_primary = Math.round((d__y_calc.trans_rating * 1000) / (d__y_vp_primary * Math.sqrt(3)));
    d__y_ip_primary = Math.round(d__y_il_primary/Math.sqrt(3));
    d__y_il_secondary = Math.round((d__y_il_primary*d__y_calc.turns_ratio)/Math.sqrt(3));


    // d_y_connection
    let d__y_results = {
      vp_primary: d__y_vp_primary,
      vl_secondary: d__y_vl_secondary,
      vp_secondary: d__y_vp_secondary,
      il_primary:d__y_il_primary,
      ip_primary:d__y_ip_primary,
      il_secondary : d__y_il_secondary
    };
    res.render('result', { d__y_calc: d__y_calc, d__y_results: d__y_results, type_of_connection: type_of_connection });

  }


      // d_d_connection
  else if (type_of_connection === 'd_d') {
    let d__d_calc = {
      vl_primary: req.body.d__d_vl__primary,
      trans_rating: req.body.d__d_trans__rating,
      frequency: req.body.d__d_freq,
      turns_ratio: req.body.d__d_turn__ratio
    };


    let d__d_vp_primary, d__d_vl_secondary, d__d_il_primary,d__d_ip_primary,d__d_il_secondary, d__d_ip_secondary;

    d__d_vp_primary = d__d_calc.vl_primary;
    d__d_vl_secondary = Math.round(d__d_vp_primary/d__d_calc.turns_ratio);
    d__d_il_primary = Math.round((d__d_calc.trans_rating * 1000) / (d__d_vp_primary * Math.sqrt(3)));
    d__d_ip_primary = Math.round(d__d_il_primary/Math.sqrt(3));
    d__d_il_secondary = Math.round(d__d_il_primary*d__d_calc.turns_ratio);
    d__d_ip_secondary = Math.round(d__d_il_secondary/Math.sqrt(3));



    let d__d_results = {
      vp_primary: d__d_vp_primary,
      vl_secondary: d__d_vl_secondary,
      il_primary:d__d_il_primary,
      ip_primary:d__d_ip_primary,
      il_secondary:d__d_il_secondary,
      ip_secondary : d__d_ip_secondary
    };
    res.render('result', { d__d_calc: d__d_calc, d__d_results: d__d_results, type_of_connection: type_of_connection });

  }


  else{
    res.send("Hello World From ECEN-403");
  }

});
















// ==================SERVER LISTENING ON PORT 3000====================================
app.listen(process.env.PORT ||3000, function () {
  console.log('App listening on port 3000!');
});