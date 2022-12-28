username=localStorage.getItem("username",username)
function addroom(){
    roomname=document.getElementById("addroom").value
    firebase.database().ref("/").child(addroom).update({
        purpose:"add room name"
  });
addroom=localStorage.setItem("addroom",addroom)
window.location="kwitter_page.html"
}
function getdata() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  row="<div id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
  document.getElementById("output").innerHTML+=row
});});}
function redirectToRoomName(name){
  localStorage.setItem("roomname",name)
  window.location="kwitter_page.html"

}
function logout(){
  window.location="index.html"
}