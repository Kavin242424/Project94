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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name" 
      });
      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name -" +Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
