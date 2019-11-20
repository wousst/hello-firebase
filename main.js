var functions = require('firebase-functions');
var admin = require('firebase-admin');
var date = require('date-time');

// Service account key. Only applies to curent shell session
var GOOGLE_APPLICATION_CREDENTIALS = require('./<service-account-key>');

// Add Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(GOOGLE_APPLICATION_CREDENTIALS),
    databaseURL: "https://<your-project>.firebaseio.com"
});

// Instantiate Firebase Databsae
const db = admin.database();
var ref = admin.database().ref('/t430/randomNumber');
var obj = null;

// Delete old data
let batch = db.ref('/t430/randomNumber');
batch.remove().then(function() {
    console.log("Successfully removed.");
}).catch(function(error) {
    console.log(`error! ${error}`);
});

setInterval(function() {
    var rand = Math.random() * 99;
    var timestamp = date();

    // Print random number 'rand' and timestamp 'timestamp'
    console.log(`rand: ${rand.toFixed(2)}, timestamp: ${timestamp}`);

    var obj = {
        rand: rand.toFixed(2),
        timestamp: timestamp,
    }

    ref.push(obj);
}, 3000);


// Retrieving data from Firebase Database, without knowing
// the child's exact path.
var leadRef = db.ref();
leadRef.on('value', function(snapshot) { // listener on new child
    // Do something with the data
    snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val());
    });
});
