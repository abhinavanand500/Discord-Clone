// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCaO581-7kwaJgT7o-s07MVHoxhOUkPge0",
    authDomain: "discord-clone-dcd54.firebaseapp.com",
    databaseURL: "https://discord-clone-dcd54.firebaseio.com",
    projectId: "discord-clone-dcd54",
    storageBucket: "discord-clone-dcd54.appspot.com",
    messagingSenderId: "1001734391222",
    appId: "1:1001734391222:web:d9e943bbe9b36b8ba0ed17",
    measurementId: "G-N1SKZNCKVC",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
