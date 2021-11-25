// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBEeCcqVVjGBloCM0Y52EdvVCdfhikUArg",
      authDomain: "kwitter-4df9f.firebaseapp.com",
      projectId: "kwitter-4df9f",
      storageBucket: "kwitter-4df9f.appspot.com",
      messagingSenderId: "745960649930",
      appId: "1:745960649930:web:61446f629ff51e2598b033"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function logout(){
      window.location="index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //End code
      });});}
getData();
