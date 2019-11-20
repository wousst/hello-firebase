hello-firebase
==============
Basics Firebase Usage. 

## Setup

```
$ npm install --save
```

## Configure

Specify your Google service account key and Firebase database URL. 

```node
# file: main.js
// Service account key. Only applies to curent shell session
var GOOGLE_APPLICATION_CREDENTIALS = require('./<service-account-key>');

// Add Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(GOOGLE_APPLICATION_CREDENTIALS),
    databaseURL: "https://<your-project>.firebaseio.com"
});
```

## Author

hadrihl // &copy; 2019. Wawasan Open University