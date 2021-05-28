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
  firebase.analytics();
  //ADD YOUR FIREBASE LINKS\
  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).child(user_name).update({
          purpose: "adding user"
      })
  }



  