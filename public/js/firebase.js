let firebaseConfig = {
    apiKey: "AIzaSyA5Dd5adylnQOVtEFRDXr2lYmIgDvUFaXY",
    authDomain: "blogging-website-14c7e.firebaseapp.com",
    projectId: "blogging-website-14c7e",
    storageBucket: "blogging-website-14c7e.appspot.com",
    messagingSenderId: "602338787339",
    appId: "1:602338787339:web:81a6bcddd0ae0e433c070e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();