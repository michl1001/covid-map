// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import {firebaseConfig, geoDataFile, phoneCollection} from '../config.jsx';


export default class firebaseAPI{
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.db = admin.database();
    }

    getGeoData(){
        var ref = db.ref(geoDataFile);        
    }

    sendPhoneNumber(number){
        let addDoc = db.collection(phoneCollection).add({
            phone:number
          }).then(ref => {
            console.log('Added document with ID: ', ref.id);
          });
    }
}