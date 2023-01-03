// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



