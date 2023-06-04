const firebaseConfig = {
    apiKey: "AIzaSyCsLkktxf25I93-S106eI-MDNQ6eb4AT6o",
    authDomain: "redsocial-2fd78.firebaseapp.com",
    databaseURL: "https://redsocial-2fd78-default-rtdb.firebaseio.com",
    projectId: "redsocial-2fd78",
    storageBucket: "redsocial-2fd78.appspot.com",
    messagingSenderId: "808374983290",
    appId: "1:808374983290:web:3da57e6e64d8150c6779c3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

document.getElementById("room_name").innerHTML = "#" + room_name + "#";

function send(){
    msg = document.getElementById("msg").value;
    
    firebase.database().ref(room_name).push({
    name:user_name,message:msg,like:0
    })
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;º  
    var name = message_data["name"];
    var message = message_data["message"];
    var like = message_data["like"];
    var etiqueta_nombre = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    var etiqueta_mensaje = "<h4 class='message_h4'>" + message + "</h4>";
    var etiqueta_boton = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    var etiqueta_ícono = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
    var rengln = etiqueta_nombre + etiqueta_mensaje + etiqueta_boton + etiqueta_ícono;
    document.getElementById("output").innerHTML += renglon;
//Termina código
 } });  }); }
getData();

  function updateLike(message_id)
  {
    console.log("clicks en el botón me gusta 👍 -  " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
  
      firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes  
       });
  
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter_room.html";
  }

