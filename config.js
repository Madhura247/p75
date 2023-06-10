import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAKc_xyCJcxrJHoo7-9wqnmuSrUzA2V7Uk",
  authDomain: "project-71-ae2d0.firebaseapp.com",
  projectId: "project-71-ae2d0",
  storageBucket: "project-71-ae2d0.appspot.com",
  messagingSenderId: "531687120419",
  appId: "1:531687120419:web:65caad8aa5a6a3aff7db96"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
