const admin = require('firebase-admin');

let serviceAccount = require('./fb-creds.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

exports.db = db;