var firebaseConfig = {
      apiKey: "AIzaSyDrxlxD4doPlpMQAW0t9evivIjEHO0lcl8",
      authDomain: "lets-chat-app-a7639.firebaseapp.com",
      databaseURL: "https://lets-chat-app-a7639-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-a7639",
      storageBucket: "lets-chat-app-a7639.appspot.com",
      messagingSenderId: "747820618434",
      appId: "1:747820618434:web:9eadd730dc03baf9d0e15b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
