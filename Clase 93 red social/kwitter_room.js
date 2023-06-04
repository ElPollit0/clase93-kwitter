// Your web app's Firebase configuration
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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "¡Hola, " + user_name + ", Bienvenido a kwitter!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("nombre sala: " + Room_names);
    row = "<div class = 'room_name' id=" + Room_names + " onclick = 'redirect(this.id)' >" + Room_names + "</div><hr><hr>";
document.getElementById("output").innerHTML += row;

 });
});

}

getData();
function redirect(nombre){
  localStorage.setItem("room_name",nombre);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
