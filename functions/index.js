const functions = require('firebase-functions');
const express = require('express');
const router = require('./custom_modules/router');
//const engines = require('consolidate');

const app = express();
//app.engine('hbs', engines.handlebars);
app.set('views', './views');
//app.set('view engine', 'hbs');
app.set('view engine', 'ejs');

//add routes
router.init(app);




// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions



exports.app = functions.https.onRequest(app);







