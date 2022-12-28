var firebaseConfig = {
    apiKey: "AIzaSyCUfhdGshUqpVHSamvJ9dGhPX6UKcmFJHY",
    authDomain: "kwitter-7e113.firebaseapp.com",
    databaseURL: "https://kwitter-7e113-default-rtdb.firebaseio.com",
    projectId: "kwitter-7e113",
    storageBucket: "kwitter-7e113.appspot.com",
    messagingSenderId: "875370820637",
    appId: "1:875370820637:web:3a413abef1ad8f340f42f4"
  };
  firebase.initializeApp(firebaseConfig)
  username=localStorage.getItem("username")
  roomname=localStorage.getItem("roomname")
  function send(){
    message=document.getElementById("message").value
    firebase.database.ref("/").push({
        name:username,
       message:message,
       like:0
    });
    document.getElementById("message").value=""
  }
  function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id)
    console.log(message_data)
    name=message_data['name']
    message=message_data['message']
    like=message_data['like']
    nametag="<h4>"+name+"</h4>"
   messagetag="<h4 class=message_h4>+message+</h4>"
   likebutton="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='update(this.id)>"
   spantag="<span class='glyphicon glyphicon-thumbs-up>Like:"+like+"</span></button><hr>"
   row=nametag+messagetag+likebutton+spantag
   document.getElementById("output").innerHTML+=row
  }});});}
  getData();
  function update(messageid){
    buttonid=messageid
    likes=document.getElementById(button.id).value
    updatedlikes=Number(likes)+1
    firebase.database.ref(roomname).child(messageid).updat({
      like:updatedlikes
    });
  }
  function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")
    window.location="index.html"
  }

  
