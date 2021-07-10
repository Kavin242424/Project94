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

  function AddUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="chat_room.html"
}