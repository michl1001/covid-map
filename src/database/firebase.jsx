// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import config from '../config.jsx';

firebase.initializeApp(config.firebaseConfig);
var db = firebase.database()
var ref = db.refFromURL(config.geoDataFile);


    /*
    sendPhoneNumber(number){
        let addDoc = firebase.database().collection(config.phoneCollection).add({
            phone:number
          }).then(ref => {
            console.log('Added document with ID: ', ref.id);
          });
    }
    */


export default ref;