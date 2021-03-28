import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9Dijmg_LBJ28HI4F23yMmZAuVnwBuh8A",
    authDomain: "kino-bar.firebaseapp.com",
    projectId: "Kino-бар",
    storageBucket: "kino- bar.appspot.com",
    messagingSenderId: "311626883364",
    APPID: "1: 311626883364: веб: 3b58707cff9da1328193b1",
    measurementId: "G-ND3GPK5PFE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()




export { auth }
export default db 