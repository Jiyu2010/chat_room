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


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;

   //End code
   });});}
getData();



function addRoom()
{
      room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "chat_page.html";


}




function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "chat_page.html";

}