const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

const serviceAccount = require('./fci-history-firebase-adminsdk-4wkdh-d2234b6aa6.json');
const app = express();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fci-history.firebaseio.com/'
})

const database = admin.database();
const fr = require('./fr-fci');

app.get('/crawl', (req, res) => {
    return fr.crawler()
        .then(result => {
            res.send(result);
        });
});

exports.api = functions.https.onRequest(app);


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
