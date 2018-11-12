import firebase from "firebase/app"; //core functionalities
import "firebase/firestore"; //database
import "firebase/auth"; //firebase authentication

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA170uLZ_GY1GnOtFo37FAkhQb5GKYewAw",
  authDomain: "ns-marioplan.firebaseapp.com",
  databaseURL: "https://ns-marioplan.firebaseio.com",
  projectId: "ns-marioplan",
  storageBucket: "ns-marioplan.appspot.com",
  messagingSenderId: "681017460549"
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;
