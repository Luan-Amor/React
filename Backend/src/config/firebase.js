const firebase = require('firebase')

  let firebaseConfig = {
    apiKey: "AIzaSyA8gFKFwjP-wsk7cBQLPtfDgIMmdGo2Nuo",
    authDomain: "todo-list-d574f.firebaseapp.com",
    databaseURL: "https://todo-list-d574f.firebaseio.com",
    projectId: "todo-list-d574f",
    storageBucket: "todo-list-d574f.appspot.com",
    messagingSenderId: "692563032887",
    appId: "1:692563032887:web:ea98ed471053fffad178b2",
    measurementId: "G-D6WK76GGP7"
  };
  // Initialize Firebase
  module.exports = firebase.initializeApp(firebaseConfig);

