function iniciarsesion() {

    user_name = document.getElementById("nombreusuario").value;
  
    localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
  }