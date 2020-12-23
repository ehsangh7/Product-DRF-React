import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAgi3_1tTpvOIlE16Vp1YYTPLovKNQ1uKY",
    authDomain: "clone-bb962.firebaseapp.com",
    projectId: "clone-bb962",
    storageBucket: "clone-bb962.appspot.com",
    messagingSenderId: "687291233545",
    appId: "1:687291233545:web:937c452798871f45770fd8",
    measurementId: "G-1E92SPM8QK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {db, auth}