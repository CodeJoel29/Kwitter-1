
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBUQRQLLfMu8eIJDpPvMegr5szGVO94rNQ",
      authDomain: "kwitter-c7956.firebaseapp.com",
      databaseURL: "https://kwitter-c7956-default-rtdb.firebaseio.com",
      projectId: "kwitter-c7956",
      storageBucket: "kwitter-c7956.appspot.com",
      messagingSenderId: "804735452326",
      appId: "1:804735452326:web:bd1c15d6a98d4c1689a067"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
