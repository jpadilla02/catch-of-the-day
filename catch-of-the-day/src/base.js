import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuWRDCsCfNK4vFjmr0E0hCa2lGQw_WX1M",
  authDomain: "catch-of-the-day-juan-padilla.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-juan-padilla.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

//This is a named export
export { firebaseApp };

//this is a default export
export default base;
