let firebaseConfig = {
  apiKey: "AIzaSyDP3uIRCZhdYtSd0CR1kiF6h_D1lTM23VE",
  authDomain: "codeadventuredb.firebaseapp.com",
  databaseURL: "https://codeadventuredb-default-rtdb.firebaseio.com",
  projectId: "codeadventuredb",
  storageBucket: "codeadventuredb.appspot.com",
  messagingSenderId: "181675613815",
  appId: "1:181675613815:web:c90edfb974bd62f5357072",
  measurementId: "G-36CNRS8BH1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// document.addEventListener('DOMContentLoaded', e =>{
//   const app = firebase.app();
//   console.log(app)
// })