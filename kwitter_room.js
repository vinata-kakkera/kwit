// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAmwsU-fIxIWdu5UzK1eV1Ter6AL7WNPZY",
  authDomain: "kwitter-2b761.firebaseapp.com",
  databaseURL: "https://kwitter-2b761-default-rtdb.firebaseio.com",
  projectId: "kwitter-2b761",
  storageBucket: "kwitter-2b761.appspot.com",
  messagingSenderId: "437981397980",
  appId: "1:437981397980:web:f2a61ec22c663d1e8f8519",
  measurementId: "G-PKJDW1PTH4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Roon_names);
      row = "<div='room_name'id=" + Roon_names + " onclick='redireactTORoonName(this.id)'>#" + Room_names + "</div><hr>";
      document.getRootNode("output").innerHTML += row;
      //End code
    });
  });
}
getData();
purpose: "adding user"

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
  })
  document.getElementById
}
