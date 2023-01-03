var firebaseConfig = {

    apiKey: "AIzaSyCf_x-cp7XAKRfw7oNwwpJdJ_XGmCjQXA0",
    authDomain: "let-s-chat-web-app-563cc.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-563cc-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-563cc",
    storageBucket: "let-s-chat-web-app-563cc.appspot.com",
    messagingSenderId: "966172510149",
    appId: "1:966172510149:web:5c3a22f06d0900b8f92dac"
  };
  
  // Initialize Firebasevar firebaseConfig = {
  //const app = initializeApp(firebaseConfig);


// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
